var express = require('express');

var app = express();

app.get('/hello', (req, res) => {
    res.send('<h1>Hello Express JS')
});

app.get('/user', (req, res) => { 
    var user = {
        "firstname": 'Pritesh',
        "lastname": 'Patel'
    }

    res.setHeader('content-type', 'application/json')
       .send(JSON.stringify(user))
});

app.get('/user', (req, res) => {
    res.send(JSON.stringify(req.query))
})

app.post('/user/:id', (req, res) => {
    var user = {
        "firstname": 'Connor',
        "lastname": 'Noonan'
    }
    res.json(user);
    res.send(JSON.stringify(req.params))
})