const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {type: String},
    info: {type: String},
    address: {type: String},
    rating: {type: String},
    review: { type: String},
    distance: {type: String}
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;