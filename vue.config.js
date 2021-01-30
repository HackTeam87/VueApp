module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    disableHostCheck: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
}