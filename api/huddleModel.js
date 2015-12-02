'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
	
var huddleSchema = new Schema({
    ownerId: Number, //can't be modified
    name: String, //can't be modified
    location: String, //can't be modified
    description: String, //can't be modified
    lifeTime: String, //can't be modified
	numberOfPeople: Number,
	huddleType: Number, // (0=academic, 1=social)
    ownerInitials: String,
    ownerSpiritAnimal: String,
    pairOrGroup: Number
}, {
    collection: 'huddles'
});

module.exports = mongoose.model('huddleModel', huddleSchema);
