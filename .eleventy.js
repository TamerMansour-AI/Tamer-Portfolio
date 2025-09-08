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
  eleventyConfig.addFilter("absoluteUrl", (p, base) => {
    if (!p) return base;
    if (/^https?:\/\//.test(p)) return p;
    const norm = p.startsWith("/") ? p : "/" + p;
    return (base || "").replace(/\/$/, "") + norm;
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

  // ---------- Layout aliases (fix & backward compatibility) ----------
  // Preferred short names:
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("page", "layouts/page.njk");
  eleventyConfig.addLayoutAlias("post", "layouts/blog-post.njk");
  // Old absolute paths still used in some pages:
  eleventyConfig.addLayoutAlias("/src/layouts/base.njk", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("/src/layouts/page.njk", "layouts/page.njk");
  eleventyConfig.addLayoutAlias("/src/layouts/blog-post.njk", "layouts/blog-post.njk");

  // ---------- Options ----------
  return {
    pathPrefix: "/Tamer-Portfolio",
    dir: {
      input: "src",
      output: "docs",
      includes: "includes",
      layouts: "layouts", // points to /src/layouts
      data: "data"
    },
    markdownTemplateEngine: "njk",
  };
};
