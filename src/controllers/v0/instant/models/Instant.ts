import { Document, model, Schema } from "mongoose"

const InstantSchema: Schema = new Schema({
    _id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    photoname: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    length: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        required: true
    }
})

export interface IInstant extends Document {
    _id: string,
    username: string,
    photoname: string,
    weight: string,
    length: string,
    latitude: string,
    longitude: string,
    timestamp: string
}

export const Instant = model<IInstant>('Instant', InstantSchema);