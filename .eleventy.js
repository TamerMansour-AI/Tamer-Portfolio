module.exports = function(eleventyConfig) {
  // Passthrough copy for static assets like CSS
  eleventyConfig.addPassthroughCopy({ 'src/styles.css': 'styles.css' });

  return {
    pathPrefix: "/Tamer-Portfolio",
    dir: {
      input: 'src',
      // These directories are relative to the input directory.
      includes: 'includes',
      layouts: 'layouts',
      data: 'data',
      output: 'dist',
    },
    templateFormats: ['njk','md','html'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
