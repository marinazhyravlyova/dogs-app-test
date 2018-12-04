const path = require('path');
const webpack = require('webpack');
const { version } = require('./package.json');

const nodeEnv = process.env.NODE_ENV;
const isProductionMode = nodeEnv === 'production';
const globals = {
  VERSION: JSON.stringify(version),
  BUILD_DATE: JSON.stringify(new Date().toLocaleString()),
  ENVIRONMENT: JSON.stringify(nodeEnv || 'local'),
};

module.globals = globals;

module.exports = {
  context: path.resolve(__dirname, ''),
  resolve: { extensions: ['.js', '.jsx'] },
  mode: isProductionMode ? 'production' : 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.js(x?)$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin({ filename: '[name].js.map' }),
  ],
};
