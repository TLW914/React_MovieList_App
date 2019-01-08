const path = require('path');
//whenever creating a new repo, need to do npm init in root directory
// - npm init creates a package json, once you have that you can do other npm installs - command line = npm init --y
//install webpack and webpack command interface


// 3 most important parts - entry, output, module property
module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'), //filepath to app etc './src/index.js'
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), // filepath to public folder where bundle lives (dependencies)
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react' ],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        },
      }
    ],
  }
  // resolve: {
  //   extensions: ['.js', '.jsx'],
  // },
};