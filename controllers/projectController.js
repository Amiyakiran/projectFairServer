//import project model
const projects = require('../Models/projectSchema')

//add project
exports.addProjects = (req,res)=>{
    console.log("inside add project funcion");
    res.status(200).json("addProject request recieved")
}