const User = require("../models/user");
const AssigndUser = require("../models/assignedUser");

exports.GetAllUsers = (req, res) => {

  AssigndUser.find({}, (function (err, assingedUsers) {
    if (err) {
      // do error handling
      res.status(500).send(err);
    }
    var assingedUsersIDs;
    console.log(assingedUsers);
    assingedUsersIDs = assingedUsers.map(function (auser) { return (auser.userId); });

    User.find({ _id: { $nin: assingedUsersIDs } }, (err, user) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(user);
    });
  }));
};

exports.AssignUser = (req, res) => {
  console.log('asign user body');
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
    console.log(assingedUsers);
    assingedUsersIDs = assingedUsers.map(function (auser) { return (auser.userId); });

    console.log(assingedUsersIDs);
    //assingedUsersIDs="5caa4bd6b5f41ed363433432";

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

