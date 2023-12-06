const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const {template} = require("@babel/core");

module.exports = {
  entry: '/src/main.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  },
  devtool: 'source-map',
  plugins: [
    new HtmlPlugin({
      template: 'public/index.html',
    }),
    new CopyPlugin(
      {
        patterns: [{
          from: 'public',
          globOptions: {
            ignore: ['**/index.html'],
          }
        }]
      }
    )
  ]
}
