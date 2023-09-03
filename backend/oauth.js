const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const crypto = require('crypto');

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

async function SignUp(user , pass, email, phone){
    let verify = false
    const collection =client.db('test').collection('users')
    const token = GenerateToken(16)
    const query = { username: user, password: pass, email: email, phone: phone , token: token };
    const result = await collection.findOne({email:email})

        console.log(result)

        if(result != null){
            console.log("Email already exists")
            return false
        }
        else{
            verify = true
            if(verify == true){
                const result = await collection.insertOne(query)
                if(result == null){ 
                    console.log("User not found")
                    return false
                }
                console.log(result)
                return true
        }
    }
    
    }

 

function GenerateToken(length) {
  return crypto.randomBytes(length).toString('hex');
}

async function Token(user , pass){
    const collection =client.db('test').collection('users')
    const query = { username: user, password: pass};
    const result = await collection.findOne(query)
    if(result == null){
        console.log("User not found")
        return false
    }
    else{
        console.log(result.token)
        return result.token
    }
 
}
async function GetUser(token) {
    console.log(token);
    const find =token;
    const collection = client.db('test').collection('users');
    const query = { token:find }; // Query based on _id
    const result = await collection.findOne(query);
    if (result == null) {
      console.log('User not found');
      // return false;
    }
    console.log(result);
    return result;
  }



// Auth("")
module.exports = {Auth, SignUp ,GenerateToken ,Token, GetUser}