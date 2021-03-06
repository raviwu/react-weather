const webpack = require('webpack');

const envToBeInjected = {
  OPEN_WEATHER_API_KEY: process.env.OPEN_WEATHER_API_KEY,
  NODE_ENV: process.env.NODE_ENV
};

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(envToBeInjected)
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
