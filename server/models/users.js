const mongoose = require("mongoose");
const Schema=mongoose.Schema
  const Users=new Schema({
    username:String,
    name:String,
    email:String,
    phone:Number,
    password:String,
  })

const User_Detail=mongoose.model('users',Users)
module.exports = User_Detail