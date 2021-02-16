const express = require('express');

const app = express();

const router = express.Router();

app.use(router);

app.get('/', (req, res) => {
    
    res.send({message: 'Welcome to Challenger of Certi Foundation'});
});


module.exports = app;