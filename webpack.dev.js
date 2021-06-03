const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/client/index.js',
  mode: 'development',
  devtool: 'source-map',
  stats: 'verbose',
  output: {
    libraryTarget: 'var',
    library: 'Client'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
    //writeToDisk: true,
    //hot: true
  },
  module: {
    rules: [
      {
        test: '/.m?js$/',
        exclude: /node_modules/,
        //use: {
        loader: 'babel-loader'
        //options: {
        //presets: ['@babel/preset-env']
        //}
        //}
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: ['css-loader']
      },
      {
        test: /\.(png | jpe?g | gif)$/i,
        exclude: ['/node_modules/', require.resolve('./src/client/index.js')],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'imgs',
            publicPath: 'imgs'
          }
        }
      },
      //{
      //test: /\.html$/i,
      //loader: 'html-loader'
      //},
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/views/index.html',
      filename: './index.html'
    }),
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false
    }),
    new MiniCssExtractPlugin({ filename: '[name].css' })
  ]
}
