const  express = require( 'express');
const app = express();
const cors = require( 'cors');
const { test } = require('node:test');
const bodyParser = require('body-parser');
const { error } = require('console');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/login', (req, res) => {
  res.send("done");
});

app.get('/api', (req, res) => {
  res.send({message:'Hello World!'});
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});