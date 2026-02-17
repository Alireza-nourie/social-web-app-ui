module.exports = {
  style: {
    postcss: {
      mode: "extends",
      loaderOptions: (postcssLoaderOptions, { env, paths }) => {
        postcssLoaderOptions.postcssOptions = {
          plugins: [require("@tailwindcss/postcss")],
        };
        return postcssLoaderOptions;
      },
    },
  },
};
