const path = require('path');

module.exports = {
  pages: {
    index: {
      entry: path.resolve(__dirname, 'client/index.js'),
    },
  },
  outputDir: path.resolve(__dirname, 'dist/static'),
  devServer: {
    port: 1337,
    proxy: {
      '^/api': {
        target: 'http://localhost:31337/api',
        ws: true,
        changeOrigin: true
      },
    },
  },
};