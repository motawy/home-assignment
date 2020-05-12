import { connect, connection } from 'mongoose'
import path from 'path'
import dotenv from 'dotenv';
dotenv.config({ path: path.join(__dirname, '.env') });

describe('connection', () => {
    it('should connect to mongoDB', async () => {
        await connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        let db = connection;
        expect(db).toEqual('Connection successful');
    })
})