module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("site/static");

    return {
        passthroughFileCopy: true
    };
}