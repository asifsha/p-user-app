const User = require("../models/user");
const AssigndUser = require("../models/assignedUser");

exports.GetAllUsers = (req, res) => {

  AssigndUser.find({}, (function (err, assingedUsers) {
    if (err) {

      res.status(500).send(err);
    }
    var assingedUsersIDs;

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

  let newAssignedUser = new AssigndUser(req.body);


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

      res.status(500).send(err);
    }
    var assingedUsersIDs;

    assingedUsersIDs = assingedUsers.map(function (auser) { return (auser.userId); });



    User.find({ _id: { $in: assingedUsersIDs } }, function (uerr, users) {
      if (uerr) {

        res.status(500).send(err);
      }

      res.status(200).json(users);


    });


  }));

};



