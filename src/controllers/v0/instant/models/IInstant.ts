import { Document } from "mongoose"

/**
 * Instant Interface to serve as a type
 */
export interface IInstant extends Document {
    _id: string,
    username: string,
    photoname: string,
    weight: string,
    length: string,
    latitude: string,
    longitude: string,
    details: Object,
    resized?: Object,
    timestamp: Date
}
