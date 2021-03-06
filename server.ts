import express from 'express';
import bodyParser from 'body-parser';
import { IndexRouter } from './src/controllers/v0/index.router';
import { connectDb } from './src/utils/connection'
import instantResizer from './src/utils/workers/worker.resizer'
import { MONGODB_URI } from './src/utils/constants'
const app = express()

// Use the body parser middleware for post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Entrypoint for the API
app.use('/api/v0/', IndexRouter)

// Setup server port
const port = process.env.PORT || 3000;

/**
 * Launch the app, connect to DB and start Worker
 */
app.listen(port, async () => {
    console.log('Running Rest API on port ' + port);
    try {
        await connectDb(MONGODB_URI)
        console.log("Connected to Mongo")
        await instantResizer()
    } catch (err) {
        console.error(err);
    }
});