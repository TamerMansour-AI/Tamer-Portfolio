const fs = require('fs');
const path = require('path');

/**
 * Eleventy configuration for the Tamer Portfolio site.
 *
 * This configuration defines passthrough rules for static assets, registers
 * collections to make it easy to loop over media items and gallery images,
 * and sets the correct pathPrefix and directory structure. The gallery
 * collection reads the contents of the `src/content/Media` folder at build
 * time and exposes an array of image filenames.
 */
module.exports = function (eleventyConfig) {
  // Copy compiled CSS and any uploaded media files straight through to the
  // output folder. Without these passthroughs Eleventy will ignore the
  // resources because they live outside of markdown or template files.
  eleventyConfig.addPassthroughCopy({ 'src/styles.css': 'styles.css' });
  eleventyConfig.addPassthroughCopy({ 'src/content/Media': 'Media' });

  // Create a collection of media posts based on the `media` tag. This makes
  // it simple to list featured videos on the home page and the full media
  // archive on the media page.
  eleventyConfig.addCollection('media', (collection) => {
    return collection.getFilteredByTag('media');
  });

  // Read all image files from the Media directory so they can be displayed
  // automatically in the gallery page. Only common image formats are
  // considered here; videos and other files will be ignored.
  eleventyConfig.addCollection('gallery', () => {
    const mediaDir = path.join(__dirname, 'src', 'content', 'Media');
    let images = [];
    if (fs.existsSync(mediaDir)) {
      images = fs
        .readdirSync(mediaDir)
        .filter((file) => /\.(png|jpe?g|gif|webp)$/i.test(file));
    }
    return images.map((file) => ({ file }));
  });

  eleventyConfig.addPassthroughCopy({ 'src/content/Media': 'Media' });

  return {
    // When hosted on GitHub Pages the site lives under the repository name,
    // so all links need this prefix. Keep it in sync with the repo name.
    pathPrefix: '/Tamer-Portfolio',
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      layouts: 'layouts',
      data: 'data'
    }
  };
};