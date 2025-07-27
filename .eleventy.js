module.exports = function (eleventyConfig) {
  // Passthrough copy for static assets like CSS
  eleventyConfig.addPassthroughCopy({ 'src/styles.css': 'styles.css' });

  return {
    dir: {
      input: 'src',
      includes: 'src/includes',
      layouts: 'src/layouts',
      data: 'src/data',
      output: 'dist',
    },
    templateFormats: ['njk', 'md', 'html'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};