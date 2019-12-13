import { post, create } from 'axios';
import { proxyServer } from '../profile';

const baseUrl = proxyServer.baseUrl;

export const POST = () => {
    post(`${baseUrl}/user/login`, {
        username: 'admin',
        password: 'admin1'
    })
        .then(function (response) {
            console.log('response:',response);
        })
        .catch(function (error) {
            console.log(error);
        });
};
