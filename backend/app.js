// app.js

const express = require("express");
const bodyParser = require("body-parser");
const userController = require("./controllers/userController");
const cors = require('cors');
//const typeController = require("./controllers/ItemTypeController");

const whitelist = ['http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

require("./config/db");

const app = express();
 
const port = process.env.PORT || 3301;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
 
app
  .route("/users")
  .get(userController.GetAllUsers);
  

app
  .route("/users/:name")
  .get(userController.SearchUsers);

app
  .route("/assignuser")
  .get(userController.GetAllAssignedUsers)
  .post(userController.AssignUser);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});