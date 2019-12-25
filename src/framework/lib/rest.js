import Axios, {post} from 'axios';
import { proxyServer } from '../profile';
import withAxios from "react-axios/lib/components/withAxios";

const baseUrl = proxyServer.baseUrl;

const rest  = Axios.create({
    baseURL:baseUrl,
    headers:{
        'Content-Type':'application/json;charset=utf-8'
    },
    timeout:3000,
    withCredentials:false
});

export const GET = (url, data, request) => {

};

export const POST = (url, data, request) => {
    // post(`${baseUrl}/user/login`, data)
    //     .then(function (response) {
    //         console.log('response:',response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    rest.post(url, data).then(function (response) {
        console.log('response:',response);
    }).catch(function (error) {
        console.log(error);
    });
};

