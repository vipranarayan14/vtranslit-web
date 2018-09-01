/* eslint-disable sort-keys */

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

const entry = './prod/app.js';
const filename = 'scripts.[chunkhash:4].js';

const config = () => ({
  entry,
  output: {
    filename,
    path: path.resolve(`${__dirname}/build`)
  },
  module: {
    rules: [

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
          'css-loader?sourceMap&minimize',
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
    new ExtractTextPlugin('styles.[chunkhash:4].css'),
    new UglifyJsPlugin(),
    new CopyWebpackPlugin([{
      from: 'prod/assets/icons/**/*',
      flatten: true,
      to: 'assets/icons/'
    }]),
    new CopyWebpackPlugin([{
      from: 'public/',
      flatten: true,
      to: './'
    }]),
    new HtmlWebpackPlugin({
      template: 'prod/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyCSS: true,
        minifyJS: true
      },
      hash: true
    }),
  ]
});

module.exports = config;
