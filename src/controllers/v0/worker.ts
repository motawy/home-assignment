import amqp from 'amqplib'

export const consume = async (queue: string) => {
    try {
        const connection = await amqp.connect('amqp://rabbitmq:5672')
        const channel = await connection.createChannel()
        const result = await channel.assertQueue(queue)
        channel.consume(queue, message => {
            console.log("Processing message...")
        }, { noAck: false })

        console.log("Waiting for messages...")
    } catch (error) {
        console.error(error)
    }
}