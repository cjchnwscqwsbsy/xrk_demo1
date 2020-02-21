import React from 'react';
import Axios from 'axios';
import { Upload, Button, Icon, message } from 'antd';
import { post } from '../../framework/lib/rest';

export default class UploadF extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fileList: [],
        };
    }
    render () {
        const properties = {
            name:'test',
            action:'http://127.0.0.1:9000/app/file/upload',
            headers:{
                // 'Content-Type':'multipart/form-data'
            },
            onStart(file){
                // console.log('on_start: ', file, file.name);
            },
            onSuccess(ret, file){
                console.log('on_success: ', ret, file.name);
                this.srcV = ret.test.path + '.png';
            },
            onError(err){
                // console.log('on_error: ', err);
            },
            onProgress({ percent }, file){
                // console.log('on_progress: ', percent, file);
            },
            customRequest({action, data, file, filename,
                headers, onError, onProgress, onSuccess, withCredentials}){
                const formData = new FormData();
                if (data) {
                    Object.keys(data).forEach(key => formData.append(key, data[key]));
                }
                formData.append(filename, file);
                Axios.post(action, formData, {
                    withCredentials,
                    headers,
                    onUploadProgress: ({ total, loaded }) => {
                        console.log('percent: ', total, loaded, Math.round(loaded / total * 100).toFixed(2));
                        onProgress({ percent: Math.round(loaded / total * 100).toFixed(2) }, file);
                    }
                }).then(({ data: response }) => {
                    onSuccess(response, file);
                }).catch(onError);
                return {
                    abort(){
                        console.log('upload progress is aborted.');
                    },
                }
            },
            // beforeUpload(file) {
            //     let files = [];
            //     this.setState({
            //         fileList: [...files]
            //     });
            //     return false;
            // },
        };
        return (
            <div>
                <Upload
                    {...properties}
                >
                    <Button>
                        <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>
                <img src='http://127.0.0.1:9000/upload_files/upload_02dc29a960d75521f9483906328d52e3.png'/>
            </div>
        );
    }
}