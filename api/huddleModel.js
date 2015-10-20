'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
	
var huddleSchema = new Schema({
    huddleId: String, //can't be modified
    ownerId: String, //can't be modified

    name: String, //can't be modified
    location: String, //can't be modified
    description: String, //can't be modified
    lifeTime: Number, //can't be modified
	numberOfPeople: Number,
	huddleType: Number // (0=both, 1=social, 2=academic)
}, {
    collection: 'huddles'
});

module.exports = mongoose.model('huddleModel', huddleSchema);

// housingType: townhome, condo, apartment, house
// distanceFromCampus: in miles
// utitlies: price range
// length: length of lease in months
// propertyTours: up to user to contact landlord if true


// propertyId: String, //can't be modified
// ownerId: String, //can't be modified
// verified: String, //can't 

// address: String, //can't be modified
// city: String, //can't be modified
// state: String, //can't be modified
// zipcode: String, //can't be modified
// distance: String, //can't

// leaseType: String, //can't be modified
// bedrooms: String, //can be modified
// bathrooms: String, //can be modified
// housingType: String, //can't be modified
// price: String, //can
// utilities: String, //can

// availability: String, //can be modified
// length: String, //can
// catsOk: String, //can
// dogsOk: String, //can

// propertyTours: String, //can
// images: [Object], //can
// description: String, //can
// lastRenovationDate: Date //can
