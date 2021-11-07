const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");
module.exports = (env = {}) => {
  const { mode = "development" } = env;

  const isProd = mode === "production";
  const isDev = mode === "development";

  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : "style-loader",
      "css-loader",
    ];
  };

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        title: "TableTest",
        template: "public/index.html",
        favicon: "./src/resources/icon.jpg",
      }),
    ];

    if (isProd)
      plugins.push(new MiniCssExtractPlugin({ filename: "main-[hash:8].css" }));

    return plugins;
  };

  return {
    mode: isProd ? "production" : isDev && "development",

    output: {
      filename: isProd ? "main-[hash:8].js" : undefined,
      publicPath: "/",
    },

    resolve: { modules: [path.resolve(__dirname, "./"), "node_modules"] },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
            },
          ],
        },
        //loading images
        {
          test: /\.(svg|png|jpg|jpeg})$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "images",
                name: "[name]-[sha1:hash:7].[ext]",
              },
            },
          ],
        },
        // loading fonts
        {
          test: /\.(ttf)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "fonts",
                name: "[name].[ext]",
              },
            },
          ],
        },
        //loading css
        {
          test: /\.css$/,
          use: getStyleLoaders(),
        },
        //loading sass
        {
          test: /\.s[ca]ss$/,
          use: [...getStyleLoaders(), "sass-loader"],
        },
      ],
    },

    plugins: getPlugins(),

    devServer: {
      open: true,
      port: 8000,
      historyApiFallback: true,
      contentBase: "./",
      hot: true,
      openPage: "",
    },
  };
};
