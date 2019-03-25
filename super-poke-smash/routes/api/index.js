const express = require("express");
const router = express.Router();

const user = require("./user")

// router.use("/", function(req,res){

// })

router.use("/users", user)
module.exports = router