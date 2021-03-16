const path = require('path');

module.exports = {
  publicPath: '/fake-news/',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/scss/*.scss'),
      ],
    },
  },

  transpileDependencies: [
    'vuetify',
  ],
};
