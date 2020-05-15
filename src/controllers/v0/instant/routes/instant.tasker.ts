import amqp from 'amqplib';

/**
 * Send message to send to the queue
 * Send data as Buffer on the resize_queue
 */
const sendTask = async (msg: any) => {
    try {
        const connection = await amqp.connect('amqp://rabbitmq')
        const channel = await connection.createChannel()
        const queue = 'resize_queue';
        channel.assertQueue(queue, {
            durable: true
        });
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)), {
            persistent: true
        });
        console.log(" [x] Sent '%s'", msg);
    } catch (error) {
        console.error(error);
    }
}

export default sendTask