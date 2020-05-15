import { connect } from 'mongoose'
const uri = "mongodb://mongo:27017/home-assignment"

/**
 * Utility for DB connection
 */
export const connectDb = async () => {
    return await connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
};
