'use strict'

const HTMLPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const plugins = [
  new HTMLPlugin({template: `${__dirname}/app/index.html`}),
  new ExtractTextPlugin('bundle.css')
]

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  devtool: 'source-map',
  plugins,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            use: [
              { loader: 'css-loader',  options: { sourceMap: true } },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                  includePaths: [`${__dirname}/app/scss/`]
                }
              },
            ]
          }
        )
      },
      {
        test: /\.(woff|ttf|svg|eot).*/,
        use: 'url?limit=10000&name=font/[hash].[ext]'
      }
    ]
  }
}
