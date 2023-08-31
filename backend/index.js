const  express = require( 'express');
const app = express();
const cors = require( 'cors');
const { test } = require('node:test');
const bodyParser = require('body-parser');
const { error } = require('console');
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);
  client.connect()
    .then(() => { console.log('Connected to Database')})
    .catch((error) => {  console.log(error)})

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send({message:'Hello World!'});
});
app.post('/api/login', (req, res) => {
  const { data, pass } = req.body;
  console.log(JSON.stringify(data), pass);
  res.send({ message: `Login Successful ${data}`, data: data, pass: pass }); 
});





app.listen(3000, () => {
  console.log('Server listening on port 3000');
});