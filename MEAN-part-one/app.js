var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const UserDB = require('./modules/userDB')
const userDB = new UserDB();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const contactRouter = require('./routes/contact');
const colleaguesRouter = require('./routes/colleagues');
const api = require('./routes/api');
const login = require('./routes/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(async (req, res, next) => {
  let user = await userDB.checklogin(req)
  if (user) {
    req.user = user;
  }
  next();
});

app.use('/logout', (req, res, next) => {
  res.clearCookie('uuid');
  res.redirect('/login');
})

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use('/', indexRouter);
app.use('/login', login);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/contact', contactRouter);
app.use('/colleagues', colleaguesRouter);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
