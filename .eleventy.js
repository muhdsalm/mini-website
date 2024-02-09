module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/fonts/Montserrat/static/Montserrat-LightItalic.ttf");
  eleventyConfig.addPassthroughCopy("./src/fonts/Montserrat/static/Montserrat-Regular.ttf");
  eleventyConfig.addPassthroughCopy("./src/fonts/Montserrat/static/Montserrat-Italic.ttf");
  eleventyConfig.addPassthroughCopy("./src/fonts/Montserrat/static/Montserrat-Bold.ttf");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/favicon.png");
  eleventyConfig.addPassthroughCopy("./src/css/output.css")
  eleventyConfig.addPassthroughCopy("./node_modules/bootstrap-icons/font/")

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);                                                                                                                         

  return {
    dir: {
      input: "src",
      output: "public",
      layouts: "_layouts",
    },
  };
};
