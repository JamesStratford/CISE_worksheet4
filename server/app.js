const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
const books = require('./api/books.js');
app.use('/api/books', books);

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11

const path = require("path");

if (process.env.NODE_ENV === "production") {

    app.use(express.static("frontend/build"));

    app.get("*", (req, res) => {

    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));

   });

}