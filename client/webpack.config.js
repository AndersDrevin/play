const path = require('path');

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, '../dist/static'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ],
},
  plugins: [
    new VueLoaderPlugin(),

  ],
};