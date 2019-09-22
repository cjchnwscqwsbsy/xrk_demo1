const Express = require('express');

const app = Express();

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/user/login', (req, res) => {
    console.log('request:',req);
    res.send('A user!')
});

app.listen(3005, () => console.log('Example app listening on port 3005!'));
