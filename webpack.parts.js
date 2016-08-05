const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

exports.clean = function(path){
  return {
    plugins: [
      new CleanWebpackPlugin([path], {
        root: process.cwd()
      })
    ]
  }
};

exports.setupBabel = function(paths){
  return {
    module: {
      loaders: [
        { 
          test: /\.jsx?$/,
          loaders: ['babel?cacheDirectory'],
          include: paths
        }
      ]
    }
  };
};