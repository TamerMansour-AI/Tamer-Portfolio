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
      url: fp.replace("src/content/media", "/Media").replace(/\\/g, "/")
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

  // --- Filters ---
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

  // ---------- Options ----------
  return {
    pathPrefix: "/Tamer-Portfolio",
    dir: {
      input: "src",
      output: "docs",
      includes: "includes",
      layouts: "layouts",
      data: "data"
    }
  };
};
