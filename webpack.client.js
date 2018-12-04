const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonWebpackConfig = require('./webpack.common');
const { globals } = require('./webpack.common');

module.exports = {
  ...commonWebpackConfig,
  entry: {
    client: './src/client/index.js',
  },
  target: 'web',
  devServer: {
    contentBase: './src',
    stats: 'errors-only',
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    ...commonWebpackConfig.plugins,
    new HtmlWebpackPlugin({
      title: '/build',
      hash: true,
      template: './src/index.html',
      inject: 'body',
      filename: 'index.html',
    }),
    new webpack.DefinePlugin({
      ...globals,
      IS_CLIENT: true,
      IS_SERVER: false,
    }),
  ],
};
