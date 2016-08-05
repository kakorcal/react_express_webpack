const webpack = require('webpack');
const validate = require('webpack-validator');
const path = require('path');

const config = {
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr', 
    path.join(__dirname, 'client', 'index.jsx')
  ],
  output:{
    publicPath: '/',
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.jsx?$/,
        include: path.join(__dirname, 'client'),
        query: {
          presets: ['react-hmre']
        }
      },
      {
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
        test: /\.s?css$/,
        include: path.join(__dirname, 'client')
      },
      {
        loader: 'file?name=[path][name].[ext]',
        test: /\.(eot|svg|ttf|woff|woff2)$/
      }
    ]
  },
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = validate(config);