module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src",
      includes: "src/includes",
      layouts: "src/layouts",
      data: "src/data",
      output: "dist"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
