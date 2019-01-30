module.exports = {

    devServer: {
        port: '9527',
        proxy: {
            '/api': {
                target: `http://bvvy.free.idcfengye.com`,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
