const webpack = require('webpack');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const pkg = require('./package.json');
const parts = require('./webpack.parts.js');
const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'client', 'index.jsx'),
  build: path.join(__dirname, 'build'),
  style: [
    path.join(__dirname, 'node_modules/bootstrap/dist/css', 'bootstrap.css'),
    path.join(__dirname, 'client', 'main.css')
  ]
}

const common = {

};

var config;
switch(process.env.npm_lifecycle_event){
  case 'build':
    break;
  default:
}

module.exports = validate(config, {quiet: true});