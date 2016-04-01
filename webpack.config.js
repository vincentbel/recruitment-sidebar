/**
 * Author: VincentBel
 * Date: 16/4/1
 */
const path = require('path')

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'static'),
    publicPath: '/static/',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css' },
    ],
  },
}
