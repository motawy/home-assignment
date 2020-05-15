import amqp from 'amqplib';
import imageResizerUtil from '../resizer';
import updateImageUtil from '../update-image'
const instantResizer = async () => {
    try {
        const connection = await amqp.connect('amqp://rabbitmq')
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