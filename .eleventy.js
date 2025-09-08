module.exports = function(eleventyConfig) {
  // Layout aliases (use in front‑matter: layout: base | page | post)
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("page", "layouts/page.njk");
  eleventyConfig.addLayoutAlias("post", "layouts/blog-post.njk");

  return {
    dir: {
      input: "src",
      output: "docs",
      // IMPORTANT: these are RELATIVE to input dir
      includes: "includes",
      data: "_data"
      // Do NOT set dir.layouts here; Eleventy will look for layouts under includes/ by default
    }
  };
};
