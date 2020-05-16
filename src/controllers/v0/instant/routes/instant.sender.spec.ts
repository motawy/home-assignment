
import amqp from 'amqplib';

test('Should send message on queue correctly', async () => {
    const msg: Object = {
        "message": "Test 1,2"
    }
    const isSent = await mockSendTask(msg)
    expect(isSent).toEqual(true)
})

/**
 * This is the exact same function but different connection string
 * Needs running instance of RabbitMQ
 */
const mockSendTask = async (msg: any): Promise<boolean> => {
    try {
        const connection = await amqp.connect('amqp://localhost:5672')
        const channel = await connection.createChannel()
        const queue = 'resize_queue';
        channel.assertQueue(queue, {
            durable: true
        });
        const isSent = channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)), {
            persistent: true
        });
        setTimeout(() => {
            connection.close()
        }, 500);
        return isSent
    } catch (error) {
        console.error(error);
        return false;
    }
}