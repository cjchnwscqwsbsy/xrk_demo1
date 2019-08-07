import { post, create } from 'axios';

export const POST = () => {
    post('/api/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    })
        .then(function (response) {
            console.log('response:',response);
        })
        .catch(function (error) {
            console.log(error);
        });
};
