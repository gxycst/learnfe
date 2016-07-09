var webpack=require('webpack');
var path = require('path');
module.exports = {
  entry:path.resolve(__dirname, 'app/app.js'),
  output:{
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module:{
    loaders: [
    {test: /\.jsx?$/,loader: 'babel',query: {presets: ['es2015','react']},exclude: /node_modules/}
                ]
           }
};