import { model, Schema, Model } from "mongoose"
import { IInstant } from './IInstant'

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
    instant: {
        type: Object,
        required: true
    },
    resized: {
        type: Object,
    },
    timestamp: {
        type: Date,
        default: Date.now(),
    }
})

export const Instant: Model<IInstant> = model<IInstant>('Instant', InstantSchema);