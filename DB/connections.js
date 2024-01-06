//import mongoose
const mongoose = require('mongoose')
//get the connection string of mongodb
const connectionString = process.env.DATABASE + ""


//establish connection
mongoose.connect(connectionString).then(()=>{
   console.log('Mongodb Atlas successfully connected with pfServer'); 
}).catch((err)=>{
    console.log('Mongodb connection failed due to'+err); 
})

/* const options = {
  serverSelectionTimeoutMS: 15000, // Set a higher value than the default 30000 (30 seconds)
};

mongoose.connect('mongodb://localhost:27017/your_database', options); */