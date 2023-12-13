//import project model
const projects = require('../Models/projectSchema')

//add project
exports.addProjects = (req,res)=>{
    console.log("inside add project funcion");
    const userId = req.payload
    console.log(userId); 
   
    //gives undefined since express.json can only parse application/json not multipart/form-data
    // const {title,language,overview,github,website} = req.body
    //console.log(title,language,overview,github,website);
   /*  const projectImage = req.file
    console.log(projectImage); */
    const projectImage = req.file.filename
    /* console.log(projectImage) */
    const {title,language,overview,github,website} = req.body
    console.log(`${title},${language},${overview},${github},${website} ,${projectImage}`);

    res.status(200).json("addProject request recieved")
}