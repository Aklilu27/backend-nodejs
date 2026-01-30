const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Route: Render home page using EJS
// Make sure you have a file: ./views/home.ejs
app.get('/home', (req, res) => {
    res.render('pages/home',{"name": "Aklilu"}); // just the name of the EJS file without extension
});

// Route: Simple test with HTML
app.get('/test', (req, res) => {
    res.send("<h1>Hello World</h1>");
});

// Route: Redirect example
app.get('/example', (req, res) => {
    res.redirect("/test");
});

// Optional: JSON response example
app.get('/json', (req, res) => {
    res.json({
        name: 'Aklilu',
        age: 21,
        profession: 'student'
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
