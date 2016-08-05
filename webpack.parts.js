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