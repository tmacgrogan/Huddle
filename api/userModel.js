'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
    userID: String,
    userName: String,
    password: String,
    userEmail: String,
    userNumber: String,
    huddleIDs: [],
    spiritAnimal: Number,
    userEmojiBio: String 
}, {
    collection: 'users'
});

module.exports = mongoose.model('userModel', userSchema);