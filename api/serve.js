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
	/////////
	//validate newHuddle
	/////////
	var huddle = new huddleModel();
	huddle.name = req.body.name;
	huddle.location = req.body.location;
	huddle.description = req.body.description;
	huddle.lifeTime = req.body.lifeTime;
	huddle.numberOfPeople = req.body.numberOfPeople;
	huddle.huddleType = req.body.huddleType;
	huddle.ownerId = req.body.ownerId ? req.body.ownerId : 1;  //override with authentication
	
	huddle.save(function(err){
		if(err){
			console.log(err);
			next();
		}
	});
	console.log(huddle);
	res.send(huddle);
});

// GET huddle.com/huddles
var huddles = express();
app.use('/huddles', huddles);
huddles.get('/', function(req, res){
	//filter by query string
	huddleModel.find(function(err, huds){
		req.huddles = huds;
		console.log("found: " + huds);
	}).exec(function(){
		console.log(req.huddles);
		res.send(req.huddles);
	});
});

// GET huddle.com/huddles/:id
huddles.param('id', function(req, res, next, id){
	console.log('searching for huddle with id ' + id);
	huddleModel.findById(id, function(err, hud){
		if(err){
			next(err);
		}else if(hud){
			console.log('found!');
			req.huddle = hud;
			next();
		}
		else{
			next(new Error("failed to load Huddle."));
		}
	}).exec();
});
huddles.get('/:id', function(req, res){
	var huddle = req.huddle;
	res.json(huddle);
});

