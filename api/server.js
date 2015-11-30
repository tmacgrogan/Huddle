//import middleware
var express = require('express');
var bodyParser = require('body-parser');
var https = require('https');
var http = require('http');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var huddleModel = require('./huddleModel.js');
var userModel = require('./userModel.js');
mongoose.connect('mongodb://localhost:27017/huddledb');
var port = 80;

//root app
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.locals.title = 'Huddle';
app.locals.email = 'root@huddle.com';

//start server @ http://localhost:[PORT]
http.createServer(app).listen(port);

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
	console.log(req);
	var huddle = new huddleModel();
	huddle.name = req.body.name;
	huddle.location = req.body.location;
	huddle.description = req.body.description;
	huddle.lifeTime = req.body.lifeTime; //TODO: make function to calculate this 
	huddle.numberOfPeople = req.body.numberOfPeople; 
	huddle.huddleType = req.body.huddleType; 
	huddle.ownerInitials = req.body.initials; //TODO: GET THIS FROM USER API METHOD
	huddle.ownerSpiritAnimal = req.body.spiritAnimal; //TODO: GET THIS FROM USER API METHOD
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

// POST huddle.com/createUser
var createUser = express();
app.use("/createUser", createUser);
createUser.post('/', function(req, res) {
	var user = new userModel();
	user.userID = req.body.userID;
	user.userName = req.body.userName;
	user.password = req.body.password;
	user.userEmail = req.body.userEmail;
	user.userNumber = req.body.userNumber;
	user.huddleIDs = req.body.huddleIDs;
	user.spiritAnimal = req.body.spiritAnimal;
	user.userEmojiBio = req.body.userEmojiBio;

	user.save(function(err) {
		if(err) {
			console.log(err);
			next();
		}
	});
console.log(user);
res.send(user);
});

// GET huddle.com/huddles
var huddles = express();
app.use('/huddles', huddles);
huddles.get('/', function(req, res){
	//filter by query string
	var filter = {};
	if(req.query.huddleType){
		filter.huddleType = req.query.huddleType;
	}
	if(req.query.location){
		filter.location = req.query.location;
	}
	if(req.query.numberOfPeople){
		filter.numberOfPeople = req.query.numberOfPeople;
	}
	huddleModel.find(filter, function(err, huds){
		req.huddles = huds;
		console.log("found: " + huds);
	}).exec(function(){
		console.log(req.huddles);
		res.send(req.huddles);
	});
});

// GET huddle.com/users
var users = express();
app.use('/users', users);
users.get('/', function(req, res) {
	userModel.find(function(err, usrs) {
		req.users = usrs;
		console.log("found: " + usrs);
	}).exec(function() {
		console.log(req.users);
		res.send(req.users);
	});
});

// GET huddle.com/users/:id
users.param('id', function(req, res, next, id) {
	console.log('searching for user with id ' + id);
	userModel.findById(id, function(err, usr) {
		if (err) {
			next(err);
		} else if (usr) {
			console.log('found!');
			req.user = usr;
			next();
		} else {
			next(new Error("Failed to load  users."));
		}
	}).exec();
});
users.get('/:id', function(req, res) {
	var user = req.user;
	res.json(user);
})

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