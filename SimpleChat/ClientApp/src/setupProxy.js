const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware("/hub/chatWithMe",{
        target:"https://localhost:5001",
        ws:true,
        changeOrigin:true,
        secure:false
    }))
}