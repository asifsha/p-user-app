const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id:{ type:mongoose.Types.ObjectId},
  name: {
    title: String,
    first: String,
    last: String
    
  },
  picture: {
    
    large : String,
    thumbnail : String,
    medium: String,
  }  
});

module.exports = mongoose.model("Users", UserSchema);