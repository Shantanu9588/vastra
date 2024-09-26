const express = require('express');
const body_parser = require('body-parser');

const exampleRoutes = require('./routes/example-route');
const HttpError = require('./models/http-error')

// bfore everything parse the incoming data first

app.use(body_parser.json())

//create app object from express

const app = express(); // by executing express as a function

// with app object register a middleware
// example - app.use(); // generic middleware because it executes at all requests ---use() method or use other http method get/post/put/patch/delete
// add first middleware body parser to ensure the body of request is parsed correctly to avoid the manual parsing of data
app.use('/api/example', exampleRoutes);

// add a middleware for error handling
// only executes when there is a error
app.use((error, res, req, next) => {
    if(res.headerSent){ // we check if a response has already been sent, helperSent is property which helps us to check header attached to it has already been sent.
        return next(error) // in above case we won't send the error
    }
   
    // if not then we need to send one now
    res.status(error.code || 500) // 500 if something went wrong on the server or code from above middlewares
    res.json({ message: error.message || "An unknown error ocuured!" }) // otherwise other generic default message
}) // when we user first parameter as error then express recognize this as a special middleware

//Error handling for unsupported Routes

app.use((req, res, next) =>{
   const error = new HttpError('Could not found any route', 404);
   throw error
})

// add listener to a certain port

app.listen(5500)








// extars
/*
 1. Routing - combination of http method and paths - listen to that path and run code accordingly
  Note - Always out source routing from another file.

 2. when we middleware function stats with three parameters request, response and next.
 3. this is middleware function e.g. (reg, res, next) => {} will apply on every incoming requests.

 4. Modal basically is a blueprint, the definition of the data object we work.

 --------------------- Modal View Controller ------------------------

 Controller are the files that holds the actual login that should execute when a certain route is reached
*/
