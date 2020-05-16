import sendTask from './instant.sender'
import { RABBITMQ_URI_TEST } from '../../../../utils/uris';

test('Should send message on queue correctly', async () => {
    const msg: Object = {
        "message": "Test 1,2"
    }
    let isSent = false;
    try {
        isSent = await sendTask(RABBITMQ_URI_TEST, msg)
    } catch (error) {
        throw Error("Error in sending a message")
    }
    expect(isSent).toEqual(true)
})