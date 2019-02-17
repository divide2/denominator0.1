module.exports = {

    devServer: {
        port: '9527',
        proxy: {
            '/api': {
                // target: 'http://bvvy.free.idcfengye.com',
                target:'http://192.168.3.236:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
