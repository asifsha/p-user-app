// app.js

const express = require("express");
const bodyParser = require("body-parser");
const userController = require("./controllers/userController");
//const typeController = require("./controllers/ItemTypeController");

require("./config/db");

const app = express();

const port = process.env.PORT || 3301;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app
  .route("/users")
  .get(userController.GetAllUsers);
  

app
  .route("/users/:name")
  .get(userController.SearchUsers);

app
  .route("/assignuser")
  .post(userController.AssignUser)


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});