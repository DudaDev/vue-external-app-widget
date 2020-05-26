module.exports = {
  css: {
    extract: false
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
        .loader('url-loader')
        .tap(options => {
          return {
            limit: 4096,
            fallback: {
              loader: 'file-loader',
              options: {
                name: 'img/[name].[hash:8].[ext]',
                publicPath: process.env.NODE_ENV === 'production' ? 'https://duda-vue-custom-widget.web.app/' : ''
              }
            }
          }
        })
  }
}
