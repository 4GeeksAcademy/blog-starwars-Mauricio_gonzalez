const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = 3000;

module.exports = {
  mode: "development",
  entry: ["./src/app.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.bundle.js",
    sourceMapFilename: "[name].js.map",
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    port: port,
    open: true, // Abre automáticamente el navegador
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: {
          loader: "file-loader",
          options: { name: "[name].[ext]" },
        },
      },
      {
        test: /\.html$/i,
        use: {
          loader: "html-loader",
          options: {
            attributes: false,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
};
