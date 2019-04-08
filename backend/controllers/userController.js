const User = require("../models/user");
const AssigndUser = require("../models/assignedUser");
const mongoose = require('mongoose');
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
  AssigndUser.find({}, (function (err, assingedUsers) {
    if (err) {
      // do error handling
      res.status(500).send(err);
    }
    var assingedUsersIDs;

    assingedUsersIDs = assingedUsers.map(function (auser) { return  ( auser._id); });

    console.log(assingedUsersIDs);
    //assingedUsersIDs="5caa4bd6b5f41ed363433432";
    User.find().where("_id").in(assingedUsers).exec((err, i) => {
      console.log(i);
    });
    User.find({ _id: { $in: assingedUsersIDs } }, function (uerr, users) {
      if (uerr) {
        // do error handling
        res.status(500).send(err);
      }
      console.log(users);
      res.status(200).json(users);

      // do something with modified users object
    });


  }));

};

exports.SearchUsers = (req, body) => {
  User.find({ "name": { $regex: '.*' + req.params.id + '.*' } }, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
};

