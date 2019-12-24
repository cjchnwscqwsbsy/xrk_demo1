import { post, create } from 'axios';
import { proxyServer } from '../profile';

const baseUrl = proxyServer.baseUrl;

export const GET = (url, data, request) => {
    rest(url, 'get', data, request);
};

export const POST = (url, data, request) => {
    // post(`${baseUrl}/user/login`, {
    //     username: 'admin',
    //     password: 'admin1'
    // })
    //     .then(function (response) {
    //         console.log('response:',response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    rest(url, 'post', data, request);
};

const rest = (url, type, data, request) => {
    console.log(url, type, data);
};
