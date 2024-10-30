const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  port: 3000,
  server: {
    baseDir: './',
    index: 'index.html', // Thay đổi index thành layout.html
    middleware: [
      createProxyMiddleware('/api', {
        target: 'http://localhost:8080',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {
          '^/api': ''
        }
      }),
      require('connect-history-api-fallback')() // Thêm sau khi proxy
    ]
  },
  files: [
   './app/**/*.{html,css,js}'
  ]
};
