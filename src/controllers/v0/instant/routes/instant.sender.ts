import amqp from 'amqplib';

/**
 * Send message to send to the queue, data is sent as Buffer on the resize_queue
 */
const sendTask = async (msg: any): Promise<boolean> => {
    try {
        const connection = await amqp.connect('amqp://rabbitmq')
        const channel = await connection.createChannel()
        const queue = 'resize_queue';
        channel.assertQueue(queue, {
            durable: true
        });
        const isSent = channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)), {
            persistent: true
        });
        console.log(" [x] Sent '%s'", msg);
        return isSent
    } catch (error) {
        console.error(error);
        return false;
    }
}

export default sendTask