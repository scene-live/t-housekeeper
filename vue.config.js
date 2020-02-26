module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/scss/_base.scss";',
      },
    },
  },
};
