//javascript
const mongoose = require("mongoose");
const connectURI=require('./dburi');

const dbURI = connectURI;
 

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");    
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// require any models

//require("../models/Item");
//require("../models/ItemsType");