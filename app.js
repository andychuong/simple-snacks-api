var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const uuid = require('uuid/v4')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var snacksRouter = require('./src/routes/snacks')

var app = express();

app.disable('x-powered-by')
// if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(bodyParser.json())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/snacks', snacksRouter);

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' }})
})

module.exports = app;
