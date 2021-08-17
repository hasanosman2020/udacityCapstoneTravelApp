const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const TerserJSPlugin = require('terser-webpack-plugin')
var sass = require('sass')

sass.render(
  {
    file: 'style.scss'
  },
  function (err, result) {
    /*...*/
  }
)

module.exports = {
  entry: './src/client/index.js',
  mode: 'development',
  devtool: 'source-map',
  stats: 'verbose',
  output: {
    libraryTarget: 'var',
    library: 'Client'
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsPlugin({})]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    //writeToDisk: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: '/.m?js$/',
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      /*
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      */
      {
        test: /\.css$/i,
        use: ['css-loader']
      },
      {
        test: /\.(png | svg | jpg | gif)$/,
        exclude: ['/node_modules/', require.resolve('./src/client/index.js')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/icon'
            }
          }
        ]
      },
      /*
        exclude: ['/node_modules/', require.resolve('./src/client/index.js')],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/icon'
          }
        }
      },
      */
      {
        test: /\.html$/i,
        loader: 'html-loader'
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
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
}
