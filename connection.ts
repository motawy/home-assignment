import { connect } from 'mongoose'
const uri = "mongodb://mongo:27017/home-assignment"

export const connectDb = () => {
    return connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
};
