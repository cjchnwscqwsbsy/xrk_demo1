import Axios from 'axios';
import { proxyServer } from '../profile';
import withAxios from "react-axios/lib/components/withAxios";

const baseUrl = proxyServer.baseUrl;

const config  = Axios.create({
    baseURL:baseUrl,
    headers:{
        'Content-Type':'application/json;charset=utf-8',
    },
    timeout:13000,
    withCredentials:false
});

config.interceptors.request.use(
    (configs) => {
        if (localStorage.token) {
            console.log('token: ',localStorage.token)
            configs.headers['authorization'] = localStorage.token;
        }
        return configs;
    },
    (error) => {
        console.log('error: ', error)
    },
);

config.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            if (response.data.code) {
                console.log(response.data)
                return statusCall(response.data);
            }
        }
    },
    (error) => {
        console.log('response error: ', error.response);
        switch (error && error.response && error.response.status) {
            case 302:
                error.message = '';
                window.location.href = '/login';
                break;
            case 400:
                error.message = '请求错误';
                break;
            case 401:
                error.message = '未授权，请登录';
                window.location.href = '/login';
                break;
            case 403:
                error.message = '拒绝访问';
                break;
            case 404:
                error.message = '未找到访问地址';
                break;
            case 408:
                error.message = '请求超时';
                break;
            case 500:
                error.message = '服务器内部错误';
                break;
            case 501:
                error.message = '服务未实现';
                break;
            case 502:
                error.message = '网关错误';
                break;
            case 503:
                error.message = '服务不可用';
                break;
            case 504:
                error.message = '网关超时';
                break;
            case 505:
                error.message = 'HTTP版本不受支持';
                break;
            default:
        }
        //Do something with response error
        return error;
    }
);

const statusCall = (data) => {
    let responseMsg = null;
    switch (data.code) {
        case 200:
            responseMsg = {
                code:'success',
                data:data
            };
            break;
        case 302:
            window.location.href = '/login';
            break;
        case 401:
            alert('暂无权限，请重新登录!');
            // window.location.href = '/login';
            break;
        case 500:
            responseMsg = {
                code:'error',
                data:data
            };
            break;
        default:
    }
    return responseMsg;
};

export const get = (url, data, request) => {
    return config.get(url, data);
};

export const post = (url, data, request) => {
    return config.post(url, data);
};

