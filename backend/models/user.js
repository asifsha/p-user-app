const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    title: String,
    first: String,
    last: String,
    type: String,
    required: true
  },
  picture: {
    type: String,
    large : String,
    thumbnail : String,
    medium: String,
  }  
});

module.exports = mongoose.model("Users", UserSchema);