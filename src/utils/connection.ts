import { connect } from 'mongoose'

/**
 * Utility for DB connection
 */
export const connectDb = async (uri: string): Promise<any> => {
    try {
        await connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (error) {
        throw Error("Error while connecting to the DB: " + error)
    }
};
