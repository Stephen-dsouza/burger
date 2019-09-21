var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
    burger: data
    };
    res.render("index", hbsObject);
  });
});
// the Ajax call made from burgerindex.js is then posted and orm update statement is run.
// orm.js holds the template of the update statement and the statement for burgers is held in modals/burger.js
router.post("/update", function(req, res) {;
    var condition = "id = " + req.body.id;
    var devour=parseInt("1");
        burger.update({
            devoured: devour
          }, condition, function() {
            res.redirect("/");
          });
    
});

// the Ajax call made from burgerindex.js is then posted and orm insert statement is run.
// orm.js holds the template of the insert statement and the statement for burgers is held in modals/burger.js
router.post("/add", function(req, res) {
  burger.create([
    "burger_name"
  ], [
    req.body.burger_name
  ], function() {
    res.redirect("/");
  });
 
  
});


module.exports = router;