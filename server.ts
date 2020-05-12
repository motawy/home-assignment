import express from 'express';
import bodyParser from 'body-parser';
import { connect, connection } from 'mongoose'
import path from 'path'
import { IndexRouter } from './src/controllers/v0/index.router';
import dotenv from 'dotenv'
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express()

try {
    connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    let db = connection;
} catch (error) {
    console.error(error);
}

// Use the body parser middleware for post requests
app.use(bodyParser.json());
app.use('/api/v0/', IndexRouter)

// Setup server port
const port = process.env.PORT || 3000;

// Launch app to listen to specified port
app.listen(port, function () {
    console.log('Running Rest API on port ' + port);
});