const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

const port = process.env.port || 8080

module.exports = {
  mode: "development",
  entry: "./src/main.jsx",
  output: {
    publicPath: "/",
    filename: "bundle.[hash].js"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: "public/index.html"
    })
  ],
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: false,
    hot: true
  }
}
