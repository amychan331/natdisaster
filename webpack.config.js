const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './public/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.geojson$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      },
    ]
  },
  mode: 'development',
  node: { fs: 'empty' },
  plugins: [
    new Dotenv()
  ]
};