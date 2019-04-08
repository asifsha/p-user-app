const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AssignedUserSchema = new Schema({
  userId :{type: mongoose.Schema.Types.ObjectId}  
});

module.exports = mongoose.model("AssignedUser", AssignedUserSchema);