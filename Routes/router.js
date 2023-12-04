 //how to setpu path in express application

//1) import express
const express = require('express')
//import controller
const userController = require('../controllers/userController')

//2) create router object of express to define path
const router = new express.Router()

//3)using router object define path
//register api
router.post('/user/register',userController.register)

//since index.js is the only file is running the router need to be connected to index.js
module.exports = router