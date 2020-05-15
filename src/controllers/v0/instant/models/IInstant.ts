/**
 * Instant Interface to serve as a type
 */
import { Document } from "mongoose"

export interface IInstant extends Document {
    _id: string,
    username: string,
    photoname: string,
    weight: string,
    length: string,
    latitude: string,
    longitude: string,
    instant: Object,
    resized?: Object,
    timestamp: Date
}
