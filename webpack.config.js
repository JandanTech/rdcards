const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:"development",
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
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
            hash: true,
            title: 'Real Deal Cards',
            myPageHeader: 'Real Deal Cards',
            template: './src/index.html',
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
      test: /\.(png|jp(e*)g|svg)$/,  
      use: [{
          loader: 'url-loader',
          options: { 
              limit: 8000, // Convert images < 8kb to base64 strings
              name: 'images/[hash]-[name].[ext]'
          } 
      }]
	 ]
 }
};