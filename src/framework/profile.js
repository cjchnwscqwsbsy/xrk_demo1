const proxyServer = {
    host: '127.0.0.1',
    port : 9000,
    protocol : 'http',
    baseUrl:'http://127.0.0.1:9000',
};

const devServer = {
    host: '127.0.0.1',
    port : 8000,
    protocol : 'http'
};

module.exports = {
    proxyServer:proxyServer,
    devServer:devServer
};
