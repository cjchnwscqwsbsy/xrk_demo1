const http = require('http');

let statusCode = 200;

const responseHeader = {
    'Content-Type':'text/html; charset=utf-8',

};

const listenParams = {
    port:1337,
    hostname:'127.0.0.1'
};

http.createServer((request,response) => {
    response.writeHead(statusCode,responseHeader);
    response.end('响应内容');
}).listen(listenParams.port, listenParams.hostname,() => {

});
