module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter('filterby', (arr, key, value) =>
    (arr || []).filter(item => item && item[key] === value)
  );

  eleventyConfig.addFilter('youtubeEmbed', (url) => {
    if (!url) return url;
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1].split(/[?&]/)[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes('watch?v=')) {
      const id = url.split('watch?v=')[1].split(/[&]/)[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    return url; // already embed form
  });

  // Passthrough: copy /src/js → /docs/js
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });

  return { dir: { input: "src", output: "docs", includes: "layouts", layouts: "layouts" } };
};
