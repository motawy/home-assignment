import amqp from 'amqplib';
import imageResizerUtil from '../resizer';

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
                await imageResizerUtil(JSON.parse(msg.content))

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