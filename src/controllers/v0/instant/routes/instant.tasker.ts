import amqp from 'amqplib';

const createTask = async (msg: any) => {
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

export default createTask