// /.eleventy.js
const glob = require("glob");
const path = require("path");

/** Eleventy configuration */
module.exports = function (eleventyConfig) {
  /* ---------- Passthrough assets ---------- */
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy({ "src/content/media": "Media" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });               // ← مهم لملف music.js
  eleventyConfig.addPassthroughCopy({ "src/static/.nojekyll": ".nojekyll" }); // ينسخ .nojekyll تلقائيًا

  /* ---------- Collections ---------- */
  eleventyConfig.addCollection("media", (collection) =>
    collection.getFilteredByTag("media")
  );

  eleventyConfig.addCollection("gallery", () =>
    glob
      .sync("src/content/media/**/*.{png,jpg,jpeg,gif,webp,svg}")
      .map((filePath) => ({
        fileName: path.basename(filePath),
        url: filePath.replace("src/content/media", "/Media").replace(/\\/g, "/")
      }))
  );

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
    return url;
  });

  /* ---------- Options ---------- */
  return {
    pathPrefix: "/Tamer-Portfolio",
    dir: { input: "src", output: "docs", includes: "includes", layouts: "layouts", data: "data" } // ← كان "dist"
  };
};
