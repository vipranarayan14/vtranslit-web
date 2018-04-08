/* eslint-disable sort-keys */

const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

const entry = './prod/app.js';
const filename = 'scripts.js';

const config = {
  entry,
  output: {
    filename,
    path: path.resolve(`${__dirname}/dist`)
  },
  module: {
    loaders: [

      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      },

      {
        test: /\.(css|less)$/,
        loader: ExtractTextPlugin.extract([
          'css-loader?sourceMap',
          'less-loader?sourceMap'
        ])
      },

      {
        test: /\.(woff|woff2|ttf|eot|svg|jpeg|png|gif)/,
        loaders: 'url-loader',
        options: {
          limit: 1,
          name: '[name].[ext]',
          useRelativePath: true
        }
      }

    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new Webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([{
      from: 'prod/assets/icons/**/*',
      flatten: true,
      to: 'assets/icons/'
    }])
  ]
};

module.exports = config;
