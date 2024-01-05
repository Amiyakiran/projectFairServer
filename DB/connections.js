//import mongoose
const mongoose = require('mongoose')
//get the connection string of mongodb
const connectionString = process.env.DATABASE

//establish connection
await mongoose.connect(connectionString).then(()=>{
   console.log('Mongodb Atlas successfully connected with pfServer'); 
}).catch((err)=>{
    console.log('Mongodb connection failed due to'+err); 
})