const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  regno: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image:{
    type:String,
    required:true,
  }
  ,year:{
    type:number,
    required:true
  }

});


const User = mongoose.model("UserData",userSchema);
module.exports = User;