import Axios from 'axios';
import { proxyServer } from '../profile';
import withAxios from "react-axios/lib/components/withAxios";

const rest = {};

const baseUrl = proxyServer.baseUrl;

const config  = Axios.create({
    baseURL:baseUrl,
    headers:{
        'Content-Type':'application/json;charset=utf-8'
    },
    timeout:3000,
    withCredentials:false
});

config.interceptors.response.use(
    (response) => {
        console.log('response msg: ', response);
        if (response.status === 401) {
            alert('暂无权限，请重新登录!');
            window.location.href = '/login';
            return false;
        }
        return {
            code:'success',
            data:response.data
        };
    },
    (error) => {
        console.log('response error: ', error);
        switch (error && error.response && error.response.status) {
            case 400:
                error.message = '请求错误';
                break;
            case 401:
                error.message = '未授权，请登录';
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

export const post = (url, data, request) => {
    return config.post(url, data);
};

