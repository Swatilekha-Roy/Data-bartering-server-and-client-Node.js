// Imports
const express = require("express");
const path = require("path");
const ejs = require("ejs");
const fs = require("fs");

// Intialize the app
const app = express();

// Template engine
app.set("view engine", "ejs");

// Loading static files
app.use(express.static("public"));
app.use(express.static("views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));

// Read JSON data
app.use(express.json({
  limit: '1mb'
}));

// Rendering index file
var clientvar = "I am sent from server to client";
app.get("/", function (req, res) {
    res.render("index", {clientvar});
})

// Reading data from variables.json
function jsonReader(filePath, cb) {
  fs.readFile(filePath, (err, fileData) => {
    if(err)
    {
      return cb && cb(err)
    }
    try
    {
      const object = JSON.parse(fileData)
      return cb && cb(null, object)
    }
    catch(err)
    {
      return cb && cb(err)
    }
  })
}
jsonReader('./views/variables.json', (err,variables) => {
  if(err)
  {
    console.log(err)
    return;
  }
  console.log(variables.name)
})

// Writing data to newCustomer.json file with space indentation
const customer = {
  name: "Newbie Co.",
  order_count: 0,
  address: "Po Box City",
}
const jsonString = JSON.stringify(customer, null, 2)
fs.writeFile('./newCustomer.json', jsonString, err => {
  if (err) {
      console.log('Error writing file', err)
  } else {
      console.log('Successfully wrote file')
  }
})

// Fetch API POST
app.post('/api', (request, response) => {
  console.log(request.body);
})

// Ports
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Lazy bum on Port ${PORT}`);
});
