const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
const Middleware1 = (req, res, next) => {
    console.log("Middleware 1 executed");
    next();
}

const Middleware2 = (req, res, next) => {
    console.log("Middleware 2 executed");
    res.send("Response from Middleware 2");    
    next();
}

const Middleware3 = (req, res, next) => {
    console.log("Middleware 3 executed");
    next();
}


const Middleware4= (req, res, next) => {
    console.log("Middleware 4 executed");
    next();
}
app.use(Middleware1);
app.use(Middleware2);
app.use(Middleware3);
app.use(Middleware4);


// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});