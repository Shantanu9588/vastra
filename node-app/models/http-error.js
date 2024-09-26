class HttpError extends Error { // extends the built in Error
    constructor(message, errorCode) { // add special constructor method
        super(message); // super to call the constructor of the base class and add the message property on the instance we create in the class
        this.code = errorCode; // this adds a code property
    }
}

module.exports = HttpError;

/* 
 Notes - 
1. A Class is a blueprint for a javascript object
*/