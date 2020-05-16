import amqp from 'amqplib';
import imageResizerUtil from '../resizer';
import updateImageUtil from '../update-image'
import { RABBITMQ_URI } from '../uris'

/**
 * Worker that process the message and update the record on the DB
 */
const instantResizer = async () => {
    try {
        const connection = await amqp.connect(RABBITMQ_URI)
        const channel = await connection.createChannel()
        const queue = 'resize_queue';
        channel.assertQueue(queue, {
            durable: true
        });
        channel.prefetch(1);
        console.log(" [*] Waiting for messages in %s.", queue);
        channel.consume(queue, async (msg: any) => {
            console.log(" [x] New image uploaded...");
            try {
                const resizedImage: Object = await imageResizerUtil(JSON.parse(msg.content))
                await updateImageUtil(resizedImage)
            } catch (err) {
                console.error(err);
            }
            console.log(" [x] Done");
            channel.ack(msg);
        }, { noAck: false });
    }
    catch (error) {
        console.error(error);
    }
}

export default instantResizer