import sendTask from '../controllers/v0/instant/routes/instant.sender'
import { IInstant } from '../controllers/v0/instant/models/IInstant'
import { RABBITMQ_URI } from './uris'

/**
 * Util to send messages on the queue
 */
const sendTaskOnQueue = async (instant: IInstant): Promise<Boolean> => {
    const payload: Object = {
        _id: instant._id,
        instant: instant.instant
    }
    const isSent = await sendTask(RABBITMQ_URI, payload)
    return isSent
}

export default sendTaskOnQueue