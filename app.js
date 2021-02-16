const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const extenso = require('./controllers/extenso');

const router = express.Router();

app.use(router);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
  
  res.statusCode = 200;
  res.setHeader('content-type', 'text/html; charset=utf-8');
  res.end('<h1> Challenger Certi</h1> <p> Insira o numero após htttp://localhost:3000/ na barra de endereço.</p> <p>Ex: http://localhost:3000/10 </p> ');
});

app.get('/:id', (req, res) =>{

  let value = req.params.id;
  res.statusCode = 200;
  res.setHeader('content-type', 'application/json');
  
  extenso.transform(res, value);

});



module.exports = app;