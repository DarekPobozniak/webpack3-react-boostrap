const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sourcePath = path.join(__dirname, './src');
const distPath = path.join(__dirname, './dist');

module.exports = (env = {}) => {
  const isProduction = env.production === true;
  const environment = isProduction ? 'production' : 'development';

  return {
    context: sourcePath,

    entry: {
      app: './index.js',
      vendor: ['react', 'react-dom'],
    },

    output: {
      filename: '[name].[chunkhash].js',
      path: distPath,
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(environment),
        },
      }),

      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: '[name].js',
      }),

      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/index.html'),
        filename: 'index.html',
        inject: 'body',
      }),

      // enable scope hoisting
      new webpack.optimize.ModuleConcatenationPlugin(),

      new ExtractTextPlugin('styles.css'),
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            use: ['css-loader', 'sass-loader'],
          }),
        },
      ],
    },

    devtool: (() => {
      if (isProduction) return 'hidden-source-map';
      return 'cheap-module-eval-source-map';
    })(),

    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
    },
  };
};
