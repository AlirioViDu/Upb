// Imports
const express = require('express'),
    mongoose = require('mongoose'),
    path = require('path');

const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');


// Connect to Database
mongoose.connect("mongodb://localhost/websales").then(db => console.log("Connected Database")).catch(err => console.log(err));

// Import router
const indexRoutes = require('./routes/router');

// Settings
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, '/public')));
app.use(expressLayouts);

app.use("/", indexRoutes);

// Listen on Port 3000
app.listen(port, () => { console.log('Server listening on port ' + port) })