const webpack = require('webpack');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'app.html',
      template: path.join(__dirname, 'client', 'index.html')
    })
  ]
};

var config;
switch(process.env.npm_lifecycle_event){
  case 'build':
    console.log('BUILDING BUNDLE');
    config = merge(
      common,
      {devtool: 'source-map'},
      {
        output: {
          // TODO: Will need a publicPath later on for deployment
          path: PATHS.build,
          filename: '[name].[chunkhash].js',
          chunkFilename: '[chunkhash].js'
        }
      }
      parts.setupBabel(PATHS.app),
      parts.clean(PATHS.build),
      parts.minify()
    );
    break;
  default:
    console.log('START EXPRESS SERVER');
    config = merge(
      common,
      {devtool: 'eval-source-map'}
    );
}

module.exports = validate(config, {quiet: true});