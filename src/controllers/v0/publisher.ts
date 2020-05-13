import amqp from 'amqplib'

export const publish = async (queue: string, data: any) => {
    try {
        const connection = await amqp.connect('amqp://rabbitmq:5672')
        const channel = await connection.createChannel()
        const result = await channel.assertQueue(queue)
        channel.sendToQueue(queue, new Buffer(data), { persistent: true })
        console.log("Job queued successfully.")
        setTimeout(() => {
            connection.close()
            process.exit(0)
        }, 500);
    } catch (error) {
        console.error(error)
    }
}