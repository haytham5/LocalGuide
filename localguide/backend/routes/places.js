const router = require('express').Router();
let Place = require('../models/place.model');

router.route('/').get((req, res) => {
    Place.find()
        .then(places => res.json(places))
        .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;