const express = require('express');
const { check } = require('express-validator'); // check is a method or a function that we can execute and then it returns a middleware configured for the validation requirements.

// add special feature and tool 
// create router object
const router = express.Router(); //execute it like a function Router is method that exist at express object


const exampleController = require('../controllers/example-controller');

// register a route
router.get('/:pid', exampleController.exampleMiddlewreFunction) // we have not executed this property from exampleController just pointed it express will know when to execute it when the request will come to this route

// route for post request

router.post('/', exampleController.examplePostMiddlewareFunction);

// route for patch request

router.patch('/:pid', exampleController.examplePatchMiddlewareFunction);

// route for delete request

router.delete('/:pid', exampleController.exampleDeleteMiddlewareFunction);

module.exports = router; // Used this as a middleware that express js offers