import MongoClient from 'mongodb'
import { Instant } from '../models/Instant'
import { IInstant } from '../models/IInstant'
import { v4 as uuidv4 } from 'uuid'

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

/**
 * Test for successfull insertion of a record 
 */
test('should insert an instant into the collection', async () => {
    // Attemp to insert mock record to DB
    const instants = db.collection("Instants")
    const mockInstant: IInstant = new Instant({
        "_id": uuidv4(),
        "username": "mido",
        "photoname": "space",
        "weight": "313kb",
        "length": "long",
        "latitude": "12s 44n",
        "longitude": "33e 13w",
        "instant": {
            "fieldname": "photo",
            "originalname": "a3ea6f89314007.5df0e3f2c90bf.jpg",
        },
    });
    try {
        await instants.insertOne(mockInstant);
    } catch (error) {
        console.log(error.name)
    }

    // Finding record just inserted
    const insertedInstant = await instants.findOne({ "_id": mockInstant._id })

    // Comparing record found with the mock just inserted
    expect(insertedInstant).toEqual(mockInstant.toJSON())
});

/**
 * Test Validation for required attributes. 
 * 'weight' attributes is missing from this insertion.
 */
test('should give validation error when required element is not inserted', async () => {
    const mockInstant: IInstant = new Instant({
        "_id": uuidv4(),
        "username": "mido",
        "photoname": "space",
        "length": "long",
        "latitude": "12s 44n",
        "longitude": "33e 13w",
        "instant": {
            "fieldname": "photo",
            "originalname": "a3ea6f89314007.5df0e3f2c90bf.jpg",
        },
    });
    let wrongDataType: any;
    try {
        wrongDataType = await mockInstant.save();
    } catch (error) {
        wrongDataType = error.name
    }
    expect(wrongDataType).toEqual("ValidationError")
});
