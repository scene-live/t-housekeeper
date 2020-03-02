module.exports = {
  publicPath: '/t-housekeeper/',
  outputDir: 'docs',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/scss/_base.scss";',
      },
    },
  },
};
