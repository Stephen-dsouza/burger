var mysql = require("mysql");
require("dotenv").config();
var keys = require("./keys");

var connection;
if(process.env.JAWSDB_URL){
  connection=mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection((keys.sql));
}
// var connection = mysql.createConnection((keys.sql));
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });
connection.connect();
module.exports = connection;
