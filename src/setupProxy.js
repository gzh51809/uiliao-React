const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy(
      '/api', {
        target: 'http://api.uliaobao.com/v3',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
          }
      },
    
    )
  )

  app.use(
    proxy(
        '/db', {
            target: 'https://wx.3hmlg.com/',
            ws: true,
            changeOrigin: true,
            pathRewrite: {
                '^/db': ''
              }
          }
      
      )
   
  )
  app.use(
    proxy(
        '/a', {
            target: 'http://localhost:3001/',
            ws: true,
            changeOrigin: true,
            pathRewrite: {
                '^/a': ''
              }
          }
      
      )
   
  )
}
