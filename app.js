const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const extenso = require('./controllers/extenso');

const router = express.Router();

app.use(router);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
  
  res.send({message: 'Welcome to challenger of Certi Foundation'});

});

app.get('/:id', (req, res) =>{

  let value = req.params.id;
  res.statusCode = 200;
  res.setHeader('content-type', 'application/json');
  
  extenso.transform(res, value);

});



module.exports = app;