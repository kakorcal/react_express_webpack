import webpack from 'webpack'
import path from 'path'

const dev = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    path.resolve('client/index.js')
  ],
  output: {
    filename: 'bundle.js',
    publicPath: 'http://localhost:2222/assets/',
    path: path.resolve()
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        include: /client/
      },
      {
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
        test: /\.s?css$/,
        include: /client/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

export default dev