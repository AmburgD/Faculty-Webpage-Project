"use strict";

var express = require('express');

var router = express.Router();
var model = {
  schedule: [{
    week: 10,
    day_of_week: "Monday",
    topic: "`localhost`, `var` versus `let`, `==` versus `===`"
  }, {
    week: 10,
    day_of_week: "Wednesday",
    topic: "Midterm 2 study guide and Express setup"
  }, {
    week: 10,
    day_of_week: "Friday",
    topic: "No classes "
  }, {
    week: 11,
    day_of_week: "Monday",
    topic: "Midterm "
  }, {
    week: 11,
    day_of_week: "Wednesday",
    topic: "Dependency management & MVC with Express "
  }]
}; // Controller that handles displaying the view 
// when a user goes to the root of the website 

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('schedule', model);
});
module.exports = router;