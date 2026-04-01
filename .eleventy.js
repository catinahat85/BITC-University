module.exports = function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("CNAME");

  // Allow raw HTML inside markdown files
  eleventyConfig.amendLibrary("md", md => md.set({ html: true }));

  // Tracks collection sorted by nav_order
  eleventyConfig.addCollection("tracks", function(col) {
    return col.getFilteredByGlob("tracks/*.md")
      .sort((a, b) => (a.data.nav_order || 99) - (b.data.nav_order || 99));
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
};
