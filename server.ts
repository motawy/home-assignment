import express from 'express';
import bodyParser from 'body-parser';
import { IndexRouter } from './src/controllers/v0/index.router';
import connectDb from './connection'
const app = express()

// Use the body parser middleware for post requests
app.use(bodyParser.json());
app.use('/api/v0/', IndexRouter)

// Setup server port
const port = process.env.PORT || 3000;

// Launch app to listen to specified port
app.listen(port, function () {
    console.log('Running Rest API on port ' + port);
});

try {
    connectDb().then(() => {
        console.log("Connected to MongoDB");
    })
} catch (error) {
    console.error(error);
}