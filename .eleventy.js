const glob = require("glob");
const path = require("path");

/**
 * Eleventy configuration for the Tamer Portfolio site.
 */
module.exports = function (eleventyConfig) {
  /* ---------- Passthrough assets ---------- */
  // CSS الرئيسي
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });
  // وسائط المعرض (تحافظ على المسار العلوي /Media)
  eleventyConfig.addPassthroughCopy({ "src/content/media": "Media" });
  // سكربتات المتصفح (مثل music.js)
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  // ضمان وجود .nojekyll في كل Build
  eleventyConfig.addPassthroughCopy({ "src/static/.nojekyll": ".nojekyll" });

  /* ---------- Collections ---------- */
  // Media (videos, etc.)
  eleventyConfig.addCollection("media", (collection) => {
    return collection.getFilteredByTag("media");
  });

  // Gallery images
  eleventyConfig.addCollection("gallery", () => {
    return glob
      .sync("src/content/media/**/*.{png,jpg,jpeg,gif,webp,svg}")
      .map((filePath) => ({
        fileName: path.basename(filePath),
        // ⇩⇩ fix path case to /Media/
        url: filePath
          .replace("src/content/media", "/Media")
          .replace(/\\/g, "/"),
      }));
  });

  /* ---------- Filters ---------- */
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
    return url; // already embed form
  });

  /* ---------- Eleventy options ---------- */
  return {
    pathPrefix: "/Tamer-Portfolio",
    dir: {
      input: "src",
      output: "docs",      // ← مهم: البناء إلى docs من أجل GitHub Pages
      includes: "includes",
      layouts: "layouts",
      data: "data",
    },
  };
};
