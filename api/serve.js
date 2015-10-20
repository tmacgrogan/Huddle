//import middleware
var express = require('express');
var bodyParser = require('body-parser');
var https = require('https');
var http = require('http');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var huddleModel = require('./huddleModel.js');
mongoose.connect('mongodb://localhost:27017/huddledb');

//root app
var app = express();

app.locals.title = 'Huddle';
app.locals.email = 'root@huddle.com';

const PORT=8080

//start server @ http://localhost:[PORT]
http.createServer(app).listen(PORT);

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
	var huddle = new huddleModel();
	huddle.name = req.body.name;
	huddle.location = req.body.location;
	huddle.description = req.body.description;
	huddle.lifeTime = req.body.lifeTime;
	huddle.numberOfPeople = req.body.numberOfPeople;
	huddle.huddleType = req.body.huddleType;
	
	huddle.save();
	/////////
	//validate newHuddle
	/////////
	console.log(huddle);
	res.send(huddle);
});

// GET huddle.com/timeline
var timeline = express();
app.use('/timeline', timeline);
timeline.get('/', function(req, res){
	//filter by query string
	var huddles = huddleModel.findOne().exec();
	console.log(huddles);
	res.send(huddles);
});