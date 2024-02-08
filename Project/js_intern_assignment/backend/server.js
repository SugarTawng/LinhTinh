// third party components
let Express = require('express');
let BodyParser = require('body-parser');
let MethodOverride = require('method-override');
let Mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const mongoURI = process.env.MONGOURI || 'mongodb+srv://20521185:iiU3flFRPM7Q06pv@cluster0.u8s2oxh.mongodb.net/?retryWrites=true&w=majority';

let port = process.env.PORT || 3000;

let App = Express();
App.use(morgan('common'));
// MongoDB Connect
Mongoose.connect(mongoURI,()=>{
    console.log('connected to DB');
});

// parse application/json
App.use(BodyParser.json({
    limit:'5mb'
}));

// parse application/vnd.api+json as json
App.use(BodyParser.json({
    type: 'application/vnd.api+json'
}));

// parse application/x-www-form-urlencoded
App.use(BodyParser.urlencoded({
    limit:'5mb',
    extended: true
}));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
App.use(MethodOverride('X-HTTP-Method-Override'));

App.use(cors());

// Routes ==================================================
require('./app/route')(App); // configure our routes

// Create App
let server = require('http').createServer(App);

// Start App: http://IP_Address:port
server.listen(port, function () {
    console.log('API V1 started to listening on port %d', port);
});

// expose app
module.exports = App;
