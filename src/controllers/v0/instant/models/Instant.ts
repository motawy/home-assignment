import { model, Schema, Model } from "mongoose"
import { IInstant } from './IInstant'

/**
 * Schema definition for Instants
 * All attributes are required besides 'resized'
 */
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
    details: {
        type: Object,
        required: true
    },
    resized: {
        type: Object,
        default: {}
    },
    timestamp: {
        type: Date,
        default: Date.now(),
    }
}, { minimize: false })

export const Instant: Model<IInstant> = model<IInstant>('Instant', InstantSchema);