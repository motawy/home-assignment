import amqp from 'amqplib';
import { RABBITMQ_URI_TEST } from '../../../../utils/constants'
test('Testing connection to RabbitMQ', async () => {
    return connectToRMQ(RABBITMQ_URI_TEST)
        .then((conn) => { expect(conn).not.toBeInstanceOf(Error) })
        .catch((err) => { expect(err).toBeInstanceOf(Error) })
})

const connectToRMQ = (uri: string) => {
    return new Promise((resolve, reject) => {
        amqp.connect(uri)
            .then((conn) => resolve(conn))
            .catch((err) => reject(Error(err)))
    });
}