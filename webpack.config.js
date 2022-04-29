// eslint-disable-next-line no-undef
const path = require("path");
// eslint-disable-next-line no-undef
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// eslint-disable-next-line no-undef
const HtmlWebpackPlugin = require("html-webpack-plugin");

// eslint-disable-next-line no-undef
module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.jsx",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    filename: "[name].bundle.js",
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "bundle_react"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|png|jpeg|jpg|gif|wav|mp3)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "./Assets",
          },
        },
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
      },
    ],
  },
};
