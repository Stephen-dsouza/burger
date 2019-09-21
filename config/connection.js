var mysql = require("mysql");
require("dotenv").config();
var keys = require("./keys");
var connection = mysql.createConnection((keys.sql));
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
