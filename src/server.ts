const express = require('express');
const bodyParser = require('body-parser');
const { connect, connection } = require('mongoose')
const path = require('path')
const { IndexRouter } = require('./controllers/v0/index.router');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express()

connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
let db = connection;

// Use the body parser middleware for post requests
app.use(bodyParser.json());
app.use('/api/v0/', IndexRouter)

// Setup server port
const port = process.env.PORT || 3000;

// Launch app to listen to specified port
app.listen(port, function () {
    console.log('Running Rest API on port ' + port);
});