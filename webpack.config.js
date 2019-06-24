const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  entry: {
    home: "./src/home.js",
    nav: "./src/nav.js",
    work: "./src/work.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "docs")
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  }
};
