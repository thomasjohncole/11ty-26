export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy("src/.nojekyll");

  eleventyConfig.addFilter("readableDate", (date) =>
    new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC"
    }).format(date)
  );

  eleventyConfig.addFilter("htmlDate", (date) =>
    new Date(date).toISOString().slice(0, 10)
  );

  eleventyConfig.addFilter("head", (items, count) =>
    items.slice(0, count)
  );

  eleventyConfig.addFilter("withoutTag", (items, excludedTag) =>
    items.filter((item) => item !== excludedTag)
  );

  eleventyConfig.addCollection("posts", (collectionApi) =>
    collectionApi.getFilteredByTag("posts").sort((a, b) => a.date - b.date)
  );

  eleventyConfig.addCollection("tagList", (collectionApi) => {
    const tags = new Set();
    for (const item of collectionApi.getAll()) {
      for (const tag of item.data.tags ?? []) {
        if (tag !== "posts") {
          tags.add(tag);
        }
      }
    }
    return [...tags].sort();
  });

  return {
    pathPrefix: "/11ty-26/",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
