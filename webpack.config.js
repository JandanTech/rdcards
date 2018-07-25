const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
     contentBase: './dist'
  },
  plugins: [
    new LiveReloadPlugin(),
    new CleanWebpackPlugin(['dist']),new HtmlWebpackPlugin({
       title: 'Real Deal Cards'
    })
  ],
 module: {
	 rules: [
	   {
	     test: /\.css$/,
	     use: [
	       'style-loader',
	       'css-loader'
	     ]
	   },
	   {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       }
	 ]
 }
};