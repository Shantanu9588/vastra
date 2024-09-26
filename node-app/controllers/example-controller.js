/* The idea is we will have all the middleware functions in one controller which actually are reached for certain routes 
just to remind - 
function nameofthefunction () {}  ------ function declaration
const nameofthefunction = function () {} or () => {} ----- function expression
const obj = {} --- object literal

status - 201 - if the data is created successfully at the server 
200 - normal success status code


--- controller basically focused on the middleware functions

--- models can be used only for routings, for mapping and for path that we are using and not mixing both in hugh file
*/
const HttpError = require('../models/http-error');

// dummy data;
let dummy_data = [];

const exampleMiddlewreFunction = (req, res, next) => {
    //access the id that is encoded in the url
    const idFromRequest = req.params.pid // params property is an object added by expressjs where the dynamic segments here exist as keys

    const place = dummy_data?.find((e) =>{
        return e?.id === idFromRequest;
    })

    if(!place){
       return next(new HttpError("Could not found any place with provided id", 404)) // pass the error to next middleware that exist in the app.js in our case or we can use throw error to pass the error in response
    }
    // json method available at res object
    // if place available then forward the response
    res.json({ place })
}

const examplePostMiddlewareFunction = (req, res, next) =>{  
    const { title, description } = req.body;

    const updatedData = {
        title,
        description,
    }
    dummy_data.push(updatedData)
    res.status(201).json({ updatedData })

}


const examplePatchMiddlewareFunction = (req, res, next) =>{
    const id = req.params.pid;
    const { title, description } = req.body;

    let findItem = [...dummy_data].find((e) =>{
       return dummy_data?.id === id
    });

    const findIndex = dummy_data?.findIndex((e) => e?.id === id);
    findItem.title = title;
    findItem.description = description;

    dummy_data[findIndex] = findItem

    res.status(200).json({ data: findItem });
}

const exampleDeleteMiddlewareFunction = (req, res, next) =>{
    const id = req.params.id;

    const newItems = dummy_data?.filter(e => e?.id !== id);

    dummy_data = newItems

    res.status(204).json({ message: "Item Deleted" });

}

exports.exampleMiddlewreFunction = exampleMiddlewreFunction; // we can bundle as many as we can in the single object exports
exports.examplePostMiddlewareFunction = examplePostMiddlewareFunction;
exports.examplePatchMiddlewareFunction = examplePatchMiddlewareFunction;
exports.exampleDeleteMiddlewareFunction = exampleDeleteMiddlewareFunction;