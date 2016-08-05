const webpack = require('webpack');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const pkg = require('./package.json');
const parts = require('./webpack.parts.js');
const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'client', 'index.jsx'),
  build: path.join(__dirname, 'build')
}

const common = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  resolve:{
    extensions: ['', '.js', '.jsx']
  }
};

var config;
switch(process.env.npm_lifecycle_event){
  case 'build':
    console.log('BUILDING BUNDLE');
    config = merge(
      common,
      {devtool: 'source-map'},
      parts.clean(PATHS.build)
    );
    break;
  default:
    console.log('START EXPRESS SERVER');
    
}

module.exports = validate(config, {quiet: true});