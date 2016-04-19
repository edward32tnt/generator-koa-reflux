module.exports = {
  entry: {
    router: './client/js/Router.js',
  },
  module: {
    loaders: [
      {test:/\.js/, loader: 'babel-loader', query: {
        presets: ['react', 'es2015'],
      }},
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter',
    'reflux': 'Reflux',
  },
  output: {
    filename: '[name].bundle.js',
  }
}
