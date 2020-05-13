import { Document, model, Schema } from "mongoose"

const InstantSchema: Schema = new Schema({
    _id: {
        type: String,
        required: true
    },
    photo: {
        type: File,
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
        type: Date,
        required: true
    }
})

export interface IInstant extends Document {
    _id: string,
    photo: File,
    username: string,
    photoname: string,
    weight: string,
    length: string,
    latitude: string,
    longitude: string,
    timestamp: Date
}

export const Instant = model<IInstant>('Instant', InstantSchema);