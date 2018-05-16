const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

require('../models/Example');
const Examplemodel = mongoose.model('Example');

// Any GET request to '/examples/lebron' will get handled here
// In order to properly follow MVC convention, this should just serve as 
// a mediator between our app and the model, so any business logic should 
// be performed within the models methods.
router.get('/:name', (req, res) => {
	Examplemodel.findOne({name: req.params.name})
	.then(whatWeFound => {
		whatWeFound.incrementCounter();
		res.send(whatWeFound);
	})
	.catch(err => {
		console.log(err)
		res.send('error');
	});
});

module.exports = router;