const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

// const common = {
//   context: __dirname + '/src',
//   module: {
//     loaders: [
//       {
//         test: [/\.js$/, /\.jsx?$/],
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//       },
//     ],
//   }
// };

// const client = {
//   entry: './client.js',
//   output: {
//     path: __dirname + '/public',
//     filename: 'app.js'
//   }
// };

// const server = {
//   entry: './server.js',
//   target: 'node',
//   externals: nodeExternals(),
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: `'production'`
//        }
//     })
//   ],
//   output: {
//     path: __dirname + '/public',
//     filename: 'app-server.js',
//     libraryTarget: 'commonjs-module'
//   }
// };


// module.exports = [
//   Object.assign({}, common, server),
//   Object.assign({}, common, client)
// ];


// module.exports = {
//   entry: './src/server.js',
//   output: {
//     path: __dirname + 'public',
//     filename: 'app.js'
//   },
//   target: 'node',
//   externals: nodeExternals(),
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: `'production'`
//        }
//     })
//   ],
//   module: {
//     loaders: [
//       {
//         test: [/\.js$/, /\.jsx?$/], 
//         loader: 'babel-loader',
//         exclude: /node_modules/
//       }
//     ]
//   }
// };


const common = {
  context: __dirname + '/src/client',
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx?$/], 
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

const client = {
  entry: './client.js',
  output: {
    path: __dirname + '/public',
    filename: 'app.js'
  }
};

const server = {
  entry: './server.js',
  target: 'node',
  output: {
    path: __dirname + '/public',
    filename: 'app-server.js',
    libraryTarget: 'commonjs-module'
  }
};

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server)
];

// module.exports = {
//   mode: 'development',
//   entry: {
//     app: ['babel-polyfill', `${SRC_DIR}/index.jsx`]
//   },
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   }, 
//   module: {
//     rules: [
//       {
//         test: [/\.js$/, /\.jsx?$/],
//         loader: 'babel-loader',
//         exclude: /node_modules/,
//         options: { 
//           presets: ['env', 'react', 'stage-0']
//         }
//       }
//     ]
//   }
// };