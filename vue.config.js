module.exports = {
  devServer: {
    port: '9527',
    proxy: {
      '/api': {
        // target: 'http://bvvy.free.idcfengye.com',
        // target: 'http://localhost:8080',
        target:'http://120.77.153.225:8080/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
