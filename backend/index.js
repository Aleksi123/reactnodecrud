const express = require("express");
const app = express();
const port = 4000;

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "reactnodecrud",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected to MySQL DB.");
});

app.use(express.json());

// GET all posts
app.get("/", (req, res) => {
  connection.query("SELECT * FROM posts", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(port, () => {
  console.log("App listening at http://localhost:${port]");
});
