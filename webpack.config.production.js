var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './client/index'
  ],
  output: {
    path: path.join(__dirname, 'client_dist'),
    filename: 'bundle.js',
    publicPath: '/client_dist'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'client')
    },{
      test: /\.json$/, 
      loader: 'json'
    },{
      test: /\.css$/,
      loader: 'style!css'
    }]
  }
};