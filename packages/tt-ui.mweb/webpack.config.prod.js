const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: path.resolve(__dirname, 'src/PackagesSearchForm/index.js'),
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'trips3m-explore-form.js',
    publicPath: 'dist/',
    library: 'ReactExploreForm',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      'superagent': path.resolve(__dirname, './node_modules/superagent'),
      'prop-types': path.resolve(__dirname, './node_modules/prop-types'),
    }
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    }),
    // new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
  ],
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    },
    "superagent": {
      commonjs: "superagent",
      commonjs2: "superagent",
      amd: "Superagent",
      root: "Superagent"
    },
    "prop-types": {
      commonjs: "prop-types",
      commonjs2: "prop-types",
      amd: "PropTypes",
      root: "PropTypes"
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              [
                '@babel/env',
                {
                  targets: { browsers: ['last 2 versions', 'safari >= 7'] },
                  modules: false,
                  loose: false
                }
              ],
              '@babel/react'
            ],
            plugins: [
              '@babel/proposal-object-rest-spread',
              'transform-class-properties',
            ]
          }
        },
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              [
                '@babel/env',
                {
                  targets: { browsers: ['last 2 versions', 'safari >= 7'] },
                  modules: false,
                  loose: false
                }
              ],
              '@babel/react'
            ],
            plugins: [
              '@babel/proposal-object-rest-spread',
              'transform-class-properties',
            ]
          }
        },
      },
      {
        test: /\.scss?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
