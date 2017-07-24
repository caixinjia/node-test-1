let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let multer  = require('multer');
global.config = require('./config/config');
global.process.env.PORT = config.port;
global.process.env.IP = config.server;

let jwt = require('jsonwebtoken');
let User = require('./models/user');

mongoose.Promise = global.Promise;
mongoose.connect(global.config.mongoDB);

/**
  * 连接成功
  */
mongoose.connection.on('connected', function() {
  console.log('Mongoose connection open to ' + global.config.mongoDB);
});

/**
 * 连接异常
 */
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose connection disconnected');
});



/** 设置跨域
Seting up server to accept cross-origin browser requests */
app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

// need to use the https://www.npmjs.org/package/body-parser module to parse the body of POST request.
// If you want the headers to show up for static files as well, try this (make sure it's before the call to use(express.static()):
// 创建 application/x-www-form-urlencoded 编码解析
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//设置multer
app.use(multer({ dest: '/tmp/'}).array('image'));

app.use(require('./controllers'));

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(process.env.PORT || 3000, process.env.IP || "127.0.0.1", function() {
  console.log('Server running');
});
