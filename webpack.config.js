const path = require('path')

module.exports = (env, argv) => ({
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: argv.mode === 'development' ? 'lunara.js' : 'lunara.min.js',
    library: 'lunara',
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
})
