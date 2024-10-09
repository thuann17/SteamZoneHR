const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  port: 3000,
  server: {
    baseDir: './',
    index: 'index.html',
    middleware: [
      require('connect-history-api-fallback')(),
      createProxyMiddleware('/api', {
        target: 'http://localhost:8080',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {
          '^/api': ''
        }
      })
    ]
  },
  files: [
   './app/**/*.{html,css,js}'
  ]
};
