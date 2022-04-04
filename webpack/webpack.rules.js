module.exports = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: 'babel-loader'
  },
  {
    test: /\.(png|jpe?g|gif|svg)$/i,
    loader: 'file-loader',
  }
];