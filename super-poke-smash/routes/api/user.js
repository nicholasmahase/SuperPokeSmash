const express = require("express");
const router = express.Router();

const db = require('./../../models');


router.get('/', function(req,res){
    res.send("hello world")
})

router.post('/register', function(req,res){
    //THIS IS FOR REGISTER 
})

module.exports = router