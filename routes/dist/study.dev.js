"use strict";

var express = require('express');

var router = express.Router(); // Controller that handles displaying the view 
// when a user goes to the root of the website 

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('study', {
    currentPage: 'study'
  });
  console.log("connected to study page");
});
module.exports = router;