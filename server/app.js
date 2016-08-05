const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config');
const PORT = process.env.PORT || 2000;
// const routes = require('./api/index');

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORT, ()=>{
  console.log(`Listening to port ${PORT}`);
});