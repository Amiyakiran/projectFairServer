//import model
const users = require('../Models/userSchema')

//logic to resolve register
exports.register = async (req, res) => {
    //logic
    console.log('inside register controller function');
    //destructuring the keys from the req body(the json is parsed and converted into javaScript object)
    const { username, email, password } = req.body
    console.log(username, email, password);
    // its a call to the mongodb hosted in internet in another port/url from the server hosted in 4000 - hence it is a asynchromous function so use asyn-await // emailinscheme : email in reqbody so one email
    try {
        const existingUser = await users.findOne({ email }) //return two response - document if presenr else null
        if (existingUser) {
            //if the document is present the response - status 409- unprocessible entity
            res.status(406).json("Account already Exist !! please login..")
        } else {
            //if null is returned response
            //create an object for the model since only those value satifying the schema should only store in the db
            const newUser = new users({
                username,
                email,
                password,
                github: "",
                linkedin: "",
                profile: ""
            })
            //save method in mongoose add the value into mongodb
            await newUser.save()
            //response
            /* res.status(200).json("Register Request received") */
            res.status(200).json(newUser)//sending the registered user details as response
            //asynchronous may get reponse or not if the response is not received the application should not stop
            //the runtime error is solved by javaScript using try and catch block. 
            //so place all the content that may result in error in try block and remaining in catch block

        }
    }catch(err){
        //always  set 401 in the catch block
       res.status(401).json(`Register API Failed, ERROR : ${err}`)
    }

} 

//logic to resolve login