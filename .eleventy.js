const glob = require("glob");
const path = require("path");

module.exports = function (eleventyConfig) {
  // ---------- Passthrough ----------
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy({ "src/content/media": "Media" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/static/.nojekyll": ".nojekyll" });

  // ---------- Collections ----------
  eleventyConfig.addCollection("media", (collection) =>
    collection.getFilteredByTag("media")
  );

  eleventyConfig.addCollection("gallery", () => {
    const files = glob.sync("src/content/media/**/*.{png,jpg,jpeg,gif,webp,svg}");
    return files.map((fp) => ({
      fileName: path.basename(fp),
      url: fp.replace("src/content/media", "/Media").replace(/\\/g, "/"),
    }));
  });

  // ---------- Filters ----------
  eleventyConfig.addFilter("youtubeEmbed", (url) => {
    if (!url) return url;
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1].split(/[?&]/)[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes("watch?v=")) {
      const id = url.split("watch?v=")[1].split(/[&]/)[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    return url;
  });

  // NEW: versioned (cache-buster)
  eleventyConfig.addFilter("versioned", (href) => {
    if (!href) return href;
    if (/[?&]v=/.test(href)) return href;
    const build =
      (process.env.GITHUB_SHA ||
        process.env.VERCEL_GIT_COMMIT_SHA ||
        process.env.COMMIT_SHA ||
        Date.now().toString()).slice(0, 7);
    const sep = href.includes("?") ? "&" : "?";
    return `${href}${sep}v=${build}`;
  });

  // --- Blog Collections ---
  eleventyConfig.addCollection("posts_en", (c) =>
    c.getFilteredByGlob("src/content/blog/en/**/*.md").filter((p) => !p.data.draft)
  );
  eleventyConfig.addCollection("posts_ar", (c) =>
    c.getFilteredByGlob("src/content/blog/ar/**/*.md").filter((p) => !p.data.draft)
  );

  // --- Tag Lists (unique) ---
  function uniqueTags(posts) {
    const set = new Set();
    posts.forEach((p) => (p.data.tags || []).forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }
  eleventyConfig.addCollection("tags_en", (c) =>
    uniqueTags(c.getFilteredByGlob("src/content/blog/en/**/*.md"))
  );
  eleventyConfig.addCollection("tags_ar", (c) =>
    uniqueTags(c.getFilteredByGlob("src/content/blog/ar/**/*.md"))
  );

  // --- Category Lists (single category per post) ---
  function uniqueCats(posts) {
    const set = new Set();
    posts.forEach((p) => {
      if (p.data.category) set.add(p.data.category);
    });
    return Array.from(set).sort();
  }
  eleventyConfig.addCollection("cats_en", (c) =>
    uniqueCats(c.getFilteredByGlob("src/content/blog/en/**/*.md"))
  );
  eleventyConfig.addCollection("cats_ar", (c) =>
    uniqueCats(c.getFilteredByGlob("src/content/blog/ar/**/*.md"))
  );

  // --- Date/URL helpers ---
  eleventyConfig.addFilter("date", (d, fmt = "yyyy") => {
    const dateObj = new Date(d);
    if (fmt === "yyyy") return String(dateObj.getFullYear());
    return dateObj.toString();
  });
  eleventyConfig.addFilter("dateToISO", (d) => new Date(d).toISOString());
  eleventyConfig.addFilter("dateDisplay", (d) => {
    try {
      return new Date(d).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      });
    } catch {
      return d;
    }
  });
  eleventyConfig.addFilter("absoluteUrl", (path, base) => {
    if (!path) return base;
    if (/^https?:\/\//.test(path)) return path;
    const p = path.startsWith("/") ? path : "/" + path;
    return (base || "").replace(/\/$/, "") + p;
  });

  // ---------- Shortcodes ----------
  eleventyConfig.addShortcode("youtube", function (id, title = "YouTube video") {
    return `
<div class="yt-embed">
  <iframe
    src="https://www.youtube-nocookie.com/embed/${id}"
    title="${String(title).replace(/"/g, '&quot;')}"
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>
</div>`;
  });

  // ---------- Inject Google Analytics (GA4) في كل صفحة HTML ----------
  const GA_ID = "G-CEWMN3HYF8"; // غيّرها إذا تبدّل الـID
  const GA_SNIPPET = `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  // نجبر GA يستخدم طريقة إرسال أقلّ حساسية للحجب
  gtag('config', '${GA_ID}', { 
    debug_mode: true, 
    send_page_view: true,
    transport_type: 'image' // جرّب كـ image بدلاً من XHR/fetch
  });

  // حدث اختبار مؤقت — عشان يظهر فورًا
  setTimeout(() => {
    try { 
      gtag('event', 'tm_debug_ping', { page: location.pathname + location.search }); 
      console.log('tm_debug_ping sent');
    } catch(e) { console.warn('tm_debug_ping failed', e); }
  }, 2000);
</script>
`;

  eleventyConfig.addTransform("inject-ga", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return content.includes("</head>")
        ? content.replace("</head>", `${GA_SNIPPET}\n</head>`)
        : content;
    }
    return content;
  });

  // ---------- Options ----------
  return {
    pathPrefix: "/Tamer-Portfolio",
    dir: {
      input: "src",
      output: "docs",
      includes: "includes",
      data: "_data",
      layouts: "layouts",
    },
    markdownTemplateEngine: "njk",
  };
};
