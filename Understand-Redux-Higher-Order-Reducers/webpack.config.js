const { resolve } = require("path")

const webpack = require("webpack")

const config = {
  devtool: "source-map",

  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    "./src/index.js"
  ],

  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist"),
    publicPath: ""
  },

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, "build"),
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ["babel-loader"],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [new webpack.HotModuleReplacementPlugin()]
}

module.exports = config
