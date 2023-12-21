module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/my-web-vie/" : "/",
  devServer: {
    compress: true,
    port: 9000,

    allowedHosts: "all",
  },
};
