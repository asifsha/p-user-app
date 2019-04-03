const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AssignedUserSchema = new Schema({
  userId: {
    type:  Schema.Types.ObjectId,
    required: true
  }  
});

module.exports = mongoose.model("AssignedUser", AssignedUserSchema);