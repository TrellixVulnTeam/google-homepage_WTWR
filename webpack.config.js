const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module:{
    rules:[
        {
            test: /\.s[ac]ss$/i,
            use:[ 'style-loader',
                  //create style nodes from js strings
                  'css-loader',
                  //translate css into commonjs
                  'sass-loader'],
                  //compile sass into css
        },
    ],
  },
};