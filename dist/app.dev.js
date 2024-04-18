"use strict";

// Review: 
// We had to use `npm install express` to install the Express library 
// And it is installed in the node_modules folder
// Also, all other dependencies are saved in package.json 
// To install the dependenicse, you run `npm install`
//    All the dependencies in package.json will then be installed in 
//    node_modules
var createError = require('http-errors');

var express = require('express');

var path = require('path');

var cookieParser = require('cookie-parser');

var logger = require('morgan');

var app = express(); // Routers are controllers that take a certain URL 
// and routes it to a view 

var indexRouter = require('./routes/index.js');

var usersRouter = require('./routes/users.js');

var homeRouter = require('./routes/home.js');

var studyRouter = require('./routes/study.js');

var syllabusRouter = require('./routes/syllabus.js');

var scheduleRouter = require('./routes/schedule.js'); // view engine setup


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express["static"](path.join(__dirname, 'public'))); // Routing is the first step of a webpage loading in Express
// It takes the URL provided by the user, and decides what
// view (e.g., homepage, search results, user admin page) 
// to show the user.
//app.use('/', indexRouter);

app.use('/', homeRouter); //app.use('/users', usersRouter);

app.use('/study', studyRouter);
app.use('/syllabus', syllabusRouter);
app.use('/schedule', scheduleRouter); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  next(createError(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
});
app.listen(3001, function () {
  console.log("Server is running on port:3001");
});
module.exports = app;