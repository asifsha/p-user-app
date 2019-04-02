const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AssignedUserSchema = new Schema({
  userId: {
    type: Guid,
    required: true
  }  
});

module.exports = mongoose.model("AssignedUser", AssignedUserSchema);