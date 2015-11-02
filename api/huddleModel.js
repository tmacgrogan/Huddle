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
	huddleType: Number, // (0=both, 1=social, 2=academic)
    ownerInitials: String,
    ownerSpiritAnimal: String
}, {
    collection: 'huddles'
});

module.exports = mongoose.model('huddleModel', huddleSchema);
