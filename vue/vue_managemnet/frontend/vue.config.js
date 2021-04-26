module.exports = {
  devServer: {
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000/api",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
      "/auth": {
        target: "http://localhost:3000/auth",
        changeOrigin: true,
        pathRewrite: {
          "^/auth": ""
        }
      }
    }
  },
  outputDir: "../backend/public"
};
