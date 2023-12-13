 //how to setpu path in express application

//1) import express
const express = require('express')
//import controller
const userController = require('../controllers/userController')
const projectController = require('../controllers/projectController')
const jwtMiddleware = require('../middleware/jwtMiddleware')
const multerConfig = require('../middleware/multerMiddleware')
//2) create router object of express to define path
const router = new express.Router()

//3)using router object define path
//register api
router.post('/user/register',userController.register)

//login api
router.post('/user/login',userController.login)

//addproject
//single('which field the file is stored')- only one file is uploaded
router.post('/project/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProjects)

//since index.js is the only file is running the router need to be connected to index.js
module.exports = router