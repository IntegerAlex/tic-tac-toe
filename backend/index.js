const  express = require( 'express');
const app = express();
const cors = require( 'cors');
const { test } = require('node:test');
const bodyParser = require('body-parser');
const { error } = require('console');
const  {Auth} = require( './oauth.js');



app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json()); 

app.get('/', (req, res) => {
  res.send({message:'Hello World!'});
});
app.post('/api/login', async(req, res) => {
  const { data, pass } = req.body;
  console.log(JSON.stringify(data), pass);
  const result = await Auth( data , pass);
  if(result == false){
    res.send({ message: `Login Failed }`, data: data, pass: pass ,login: result });
  }else{
  console.log(result);
  res.send({ message: `Login Successful }`, data: data, pass: pass ,login: result }); 
  }
});





app.listen(3000, () => {
  console.log('Server listening on port 3000');
});