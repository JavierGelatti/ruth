const proxy = require('http-proxy-middleware');

module.exports = function _proxy(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://localhost:8760',
      changeOrigin: true,
    }),
  );
};
