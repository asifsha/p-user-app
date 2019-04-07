const User = require("../models/user");
const AssigndUser = require("../models/assignedUser");

exports.GetAllUsers = (req, res) => {
  User.find({}, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
};

exports.AssignUser = (req, res) => {
  console.log(req.body);
  let newAssignedUser = new AssigndUser(req.body);

  //newAssignedUser.userId=req.body._id; 
  newAssignedUser.save((err, assingedUser) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(assingedUser);
  });
};


exports.GetAllAssignedUsers = (req, res) => {
  AssigndUser.find({}, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
};

exports.SearchUsers = (req, body) => {
  User.find({ "name": { $regex: '.*' + req.params.id + '.*' } }, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
};

