import { model, Schema } from "mongoose"

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
    photo: {
        type: Object,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now(),
    }
})

export const Instant = model('Instant', InstantSchema);