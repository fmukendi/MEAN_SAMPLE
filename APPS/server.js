// server.js 

/////////////////////////////////////////////////
//----GROUP 1-----> Libraries                ////
/////////////////////////////////////////////////

//---1.1---require (require comes from Node.js
var http = require("http");  //---> we need http to create a server. http is a standard Node.js Library.

/*
Web Applications
Express.js is a Node.js web application framework, designed for building single-page, multi-page, and hybrid web applications
 */
var express = require("express"); //---> express will be able to be executed like a function
var bodyParser = require('body-parser');//---> Franck 

/////////////////////////////////////////////////
//----GROUP 2----->  Set up app             ////
/////////////////////////////////////////////////  

var app = express(); //--> we can express our app this way
//Express.js is a Node.js web application framework, designed for building single-page, multi-page, and hybrid web applications

//---> this will give us access to all the conntrollers//---> must use view engine like vash
var controllers = require('./src/controllers');

var path = require('path');

var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require("connect-flash");

/////////////////////////////////////////////////
//----GROUP 3----->  View Engine           ////
/////////////////////////////////////////////////
    
app.set('views',path.join(__dirname,'src/views'));
app.set('view engine', 'vash');//--->Set up View Engine

// Opt into Services 
//app.use(express.urlencoded());---> from video do not work 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());//--> so that http API can understand json objects 
//--just to error notifications!!!!--req.flash("newCatName", err);//--> store this temporary error --> store this in session
app.use(cookieParser());
app.use(session({ secret: "PluralsightTheBoard" }));//---> secret is what the session state is encrypted with.//--> we also need to track cookie for indivual user using above 
app.use(flash());//--> but flash use session state while node do not .... so we ll add something above 


/////////////////////////////////////////////////
//----GROUP 4  ----->  Config                ////
/////////////////////////////////////////////////

//--->set the public static resource folder so that layout.vash can do link href="/css/site.css"
app.use(express.static(__dirname + '/public'));

// use authentication ---> before going to the controller 
//var auth = require("./auth");
//auth.init(app);

/////////////////////////////////////////////////
//----GROUP 5 -----> Map the routs           ////
///////////////////////////////////////////////// 

controllers.init(app);//----Map the routes

/////////////////////////////////////////////////
//----GROUP 6 ----->  Create server          ////
///////////////////////////////////////////////// 
 
var server = http.createServer(app);//---create the actual server

/////////////////////////////////////////////////
//----GROUP  7-----> RUN THE SERVER           ////
/////////////////////////////////////////////////
 
//var port = process.env.port || 1337;//---> for online purpose only
var port = 5000;
server.listen(port);   //---> for local purpose only   

//---5--Socket io
//var updater = require("./updater");
//updater.init(server);