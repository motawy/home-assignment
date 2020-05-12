import { connect } from 'mongoose'

const connectionString = "mongodb://mongodb:27017/dhome-assignmentb"

const connectDb = () => {
    return connect(connectionString, {
        useNewUrlParser: true, useUnifiedTopology: true
    });
};


export default connectDb