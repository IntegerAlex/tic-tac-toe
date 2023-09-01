const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const e = require('express');

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
    const query = { username: user, password: pass, email: email, phone: phone };
    const result = await collection.findOne({email:email})

        console.log(result)
        console.log(result.username)   
        if(result.email===email){
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


// Auth("")
module.exports = {Auth, SignUp}