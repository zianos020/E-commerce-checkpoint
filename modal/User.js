// 1- req mongoose
const mongoose = require("mongoose")

// 2- schema
const {Schema, model} = mongoose 

// 3- creating schema
const UserSchema = new Schema({
    name: {type:String, require:true},
    email: {type:String, require:true},
    password: {type:String, require:true},
    phone: {type:Number}
})

module.exports = User = model("User", UserSchema)