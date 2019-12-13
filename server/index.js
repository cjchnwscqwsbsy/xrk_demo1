const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/user/login', (req, res) => res.send('Hello World!'));


app.listen(9000, () => console.log('Example app listening on port 9000!'));
