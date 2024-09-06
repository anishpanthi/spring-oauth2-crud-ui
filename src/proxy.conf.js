const PROXY_CONFIG = [
  {
    context: ["/tmv/accelerator/api"],
    target: "http://localhost:8080/tmv/accelerator/api",
    secure: false,
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {"^/tmv/accelerator/api": ""}
  }
]

module.exports = PROXY_CONFIG;
