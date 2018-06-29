const path = require('path');
const webpack = require('webpack');

const jsCwd = path.join(process.cwd(), './src');
const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  context: jsCwd,
  entry: './index.js',
  mode: isDev ? 'development' : 'production',
  output: {
    path: path.join(process.cwd(), 'dest'),
    filename: 'bundle.js',
    publicPath: '/dest/',
  },
  devtool: isDev ? 'inline-source-map' : 'hidden',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
    alias: {
      'app': jsCwd
    }
  },
  plugins: [],
  devServer: {
    contentBase: __dirname,
    compress: true,
    historyApiFallback: true
  }
};

if (isDev) {
  module.exports.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}