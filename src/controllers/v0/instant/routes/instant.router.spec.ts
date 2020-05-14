import { Document } from 'mongoose'
const { MongoClient } = require('mongodb');
import { Instant } from '../models/Instant'
import { v4 as uuidv4 } from 'uuid'

describe('create', () => {
    let connection: any;
    let db: any;

    beforeAll(async () => {
        connection = await MongoClient.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        db = await connection.db("test");
    });

    afterAll(async () => {
        await connection.close();
        db.close()
    });

    it('should insert a instant into collection', async () => {
        // Saving mock record to DB
        const instants = db.collection("Instants")
        const mockInstant: Document = new Instant({
            "_id": uuidv4(),
            "username": "mido",
            "photoname": "space",
            "weight": "313kb",
            "length": "long",
            "latitude": "12s 44n",
            "longitude": "33e 13w",
            "photo": {
                "fieldname": "photo",
                "originalname": "a3ea6f89314007.5df0e3f2c90bf.jpg",
            },
        });
        await instants.insertOne(mockInstant);

        // Finding record just inserted
        const insertedInstant = await instants.findOne({ "_id": mockInstant._id })

        // Comparing record found with the mock just inserted
        expect(insertedInstant).toEqual(mockInstant.toJSON())
    });
})
