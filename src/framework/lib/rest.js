import { post, create } from 'axios';

export const POST = () => {
    post('api/user/login', {
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
