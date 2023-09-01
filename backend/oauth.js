const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();


const client = new MongoClient(process.env.MONGO_URI);
  client.connect()
    .then(() => { console.log('Connected to Database')})
    .catch((error) => {  console.log(error)})
   

async function Auth(user , pass){
    const collection =client.db('test').collection('users')
    const query = { username: user, password: pass };
    const result = await collection.findOne(query)
    if(result == null){ 
        console.log("User not found")
        return false
    }    
    console.log(result)
    return true
}
// Auth("")
module.exports = {Auth}