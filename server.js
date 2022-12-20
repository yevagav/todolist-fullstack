require('dotenv').config();
require('./config/database');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan')
const PORT = process.env.PORT || 3001

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(logger('dev'));

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests\

app.use("/api/todos", require("./routes/api/todos"))

app.get('/api/test', (req, res) => {
    res.json({'eureka': 'you have found it'})
})

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})


app.listen(PORT, () => {
    console.log(`I am listening on ${PORT}`)
})