import sendTask from '../instant.sender'
import { IInstant } from '../../models/IInstant'
import { RABBITMQ_URI } from '../../../../../utils/constants'

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