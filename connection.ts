import { connect } from 'mongoose'

const connectionString = "mongodb://mongodb:porta/db"

const connectDb = () => {
    return connect(connectionString, {
        useNewUrlParser: true, useUnifiedTopology: true
    });
};


export default connectDb