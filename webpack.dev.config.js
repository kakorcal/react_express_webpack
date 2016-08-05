const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, 'client', 'index')
  },
  output:{
    publicPath: '/',
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: ['', 'js', 'jsx'],
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.jsx?$/,
        include: path.join(__dirname, 'client')
      }
    ]
  }
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
};