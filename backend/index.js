const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello");
});

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "reactnodecrud",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected to MySQL DB.");
});

app.listen(port, () => {
  console.log("App listening at http://localhost:${port]");
});
