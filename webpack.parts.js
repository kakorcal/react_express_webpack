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

exports.minify = function(){
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  }
};

exports.setFreeVariable = function(key, value){
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [
      new webpack.DefinePlugin(env)
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

exports.extractFromBundle = function(options){
  const entry = {};
  entry[options.name] = options.entries;

  return {
    entry: entry,
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: [options.name, 'manifest']
      })
    ]  
  }
};