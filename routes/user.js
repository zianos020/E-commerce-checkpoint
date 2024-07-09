// 1- require express
const express = require("express");
const { register, signin } = require("../controller/user");
const { validation, registervalidation, loginValidation } = require("../middlewear/validator");
const isAuth = require("../middlewear/isAuth");

// 2- router
const router = express.Router();

// sign Up


// register
router.post("/register", register, registervalidation(), validation)


//sign in
router.get("/signin", signin,loginValidation(), validation)

// curent user
router.get("/current", isAuth, (req, res) =>{
    res.send('you are authorized')
})


module.exports = router 