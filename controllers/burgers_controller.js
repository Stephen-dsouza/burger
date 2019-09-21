var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
    burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/update", function(req, res) {
    console.log("suvess");
    console.log(req.body);
    var condition = "id = " + req.body.id;
    var devour=parseInt("1");
        burger.update({
            devoured: devour
          }, condition, function() {
            res.redirect("/");
          });
    
});


module.exports = router;