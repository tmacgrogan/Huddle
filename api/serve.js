//import middleware
var express = require('express');
var bodyParser = require('body-parser');
var https = require('https');
var http = require('http');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/huddledb')

//root app
var app = express();

app.locals.title = 'Huddle';
app.locals.email = 'root@huddle.com';

const PORT=8080

//start server @ http://localhost:[PORT]
http.createServer(app).listen(PORT);

//make db accessible
app.use(function(req,res,next){
    req.db = db;
    next();
});

//use middleware
app.use(bodyParser.json());

// GET huddle.com
app.get('/', function(req, res){
	res.send('Welcome to Huddle!');
});

// POST huddle.com/create
var create = express();
app.use("/create", create);
create.post('/', function(req, res){
	var db = req.db;
	var huddles = db.get('huddles');
	var newHuddle = req.body;
	/////////
	//validate newHuddle
	/////////
	huddles.insert(newHuddle);
	console.log(newHuddle);
	res.send("");
});

// GET huddle.com/timeline
var timeline = express();
app.use('/timeline', timeline);
timeline.get('/', function(req, res){
	//filter by query string
	var db = req.db;
	var huddles = db.get('huddles');
	console.log(huddles);
	res.send(huddles);
});