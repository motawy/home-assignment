import express from 'express';
import bodyParser from 'body-parser';
import { IndexRouter } from './src/controllers/v0/index.router';
import { connectDb } from './connection'
import instantResizer from './src/utils/workers/instant-resizer'
const app = express()

// Use the body parser middleware for post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v0/', IndexRouter)

// Setup server port
const port = process.env.PORT || 3000;

// Launch app to listen to specified port
app.listen(port, async () => {
    console.log('Running Rest API on port ' + port);
    await connectDb()
    console.log("Connected to Mongo")
    instantResizer()
});