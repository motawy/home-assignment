import sendTask from '../controllers/v0/instant/routes/instant.sender'
import { IInstant } from '../controllers/v0/instant/models/IInstant'
import { RABBITMQ_URI } from './constants'

/**
 * Util to send messages on the queue
 */
const sendTaskOnQueue = async (instant: IInstant): Promise<Boolean> => {
    const payload: Object = {
        _id: instant._id,
        details: instant.details
    }
    const isSent = await sendTask(RABBITMQ_URI, payload)
    return isSent
}

export default sendTaskOnQueue