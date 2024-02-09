module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/fonts/Poppins/Poppins-LightItalic.ttf");
  eleventyConfig.addPassthroughCopy("./src/fonts/Poppins/Poppins-Regular.ttf");
  eleventyConfig.addPassthroughCopy("./src/fonts/Poppins/Poppins-Italic.ttf");
  eleventyConfig.addPassthroughCopy("./src/fonts/Poppins/Poppins-Bold.ttf");
  eleventyConfig.addPassthroughCopy("./src/fonts/Montserrat/static/Montserrat-SemiBold.ttf");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/favicon.svg");
  eleventyConfig.addPassthroughCopy("./src/css/output.css")

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);                                                                                                                         

  return {
    dir: {
      input: "src",
      output: "public",
      layouts: "_layouts",
    },
  };
};
