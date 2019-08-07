const Express = require('express');

const app = Express();

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/user', (req, res) => res.send('A user!'));

app.listen(3005, () => console.log('Example app listening on port 3005!'));