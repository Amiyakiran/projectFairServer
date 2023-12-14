//import project model
const projects = require('../Models/projectSchema')

//add project
exports.addProjects = async(req,res)=>{
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

    try {
        const existingUser = await projects.findOne({github})
        if(existingUser){
            res.status(406).json("Project Already Exist !! Upload Another")
        }
        else{
            //create object for model
            const newProject = new projects({
                title,language,overview,github,website,projectImage,userId
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
        
    } catch (err) {
        res.status(401).json("Request Failed due to ",err)
    }

    
}

//getUserProject
exports.allUserProjects = async(req,res)=>{
    //get id from the token
    const userId = req.payload
    try {
        const userProjects = await projects.find({userId})
            res.status(200).json(userProjects)
    } catch (err) {
       res.status(401).json(err) 
    }

}
//allproject
exports.getAllProjects = async(req,res)=>{
    try {
        const allprojects = await projects.find()
            res.status(200).json(allprojects)
    } catch (err) {
       res.status(401).json(err) 
    }

}
//home projects
exports.gethomeProjects = async(req,res)=>{
    try {
        const homeprojects = await projects.find().limit(3)
            res.status(200).json(homeprojects)
    } catch (err) {
       res.status(401).json(err) 
    }

}
