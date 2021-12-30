const express = require('express');
const app = express();

app.get('/helloprogram', (req, res) =>{
    res.send('<div>Hello World</div>')
} )

app.get('/test', (req, res) =>{
    res.send('<div>We are just testing</div>')
} )

app.listen(3000);