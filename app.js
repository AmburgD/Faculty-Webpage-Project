
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

// Routers are controllers that take a certain URL 
// and routes it to a view 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');
var scheduleRouter = require('./routes/schedule');
var studyRouter = require('./routes/study');
var syllabusRouter = require('./routes/syllabus');

var app = express();

app.listen(3001, () =>{

  console.log("Listening on port 3001")
})

app.use('/', homeRouter)
// app.get('/', (request, response)=>{
//  
// })
// app.get('/schedule', (request, response)=>{
//   response.render('schedule')
// })
// app.get('/syllabus', (request, response)=>{
//   response.render('syllabus')
// })
// app.get('/study', (request, response)=>{
//   response.render('study')
// })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Routing is the first step of a webpage loading in Express
// It takes the URL provided by the user, and decides what
// view (e.g., homepage, search results, user admin page) 
// to show the user.
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Home', homeRouter);
app.use('/schedule', scheduleRouter);
app.use('/study', studyRouter);
app.use('/syllabus', syllabusRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
