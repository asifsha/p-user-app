const User = require("../models/user");
const AssigndUser = require("../models/assingedUser");

exports.GetAllUsers = (req, res) => {
    User.find({}, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
};

exports.AssignUser = (req, res) => {
  let newAssignedUser = new AssigndUser(req.body);    
  newAssignedUser.save((err, assingedUser) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(assingedUser);
  });
};

exports.SearchUsers = (req, body) => {
  User.find({ "name": { $regex: '.*' + req.params.id + '.*' }}, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
};

