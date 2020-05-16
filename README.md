# Backend selection home assignment

## Getting started

To run the project you'll need to install the dependencies

```
yarn OR npm install
```

Project based on Docker. To run the project:

```
docker-compose up
```

## Tests

For the tests I choose Jest as a suite and it will run all the tests using

```
yarn test OR npm run test
```

This command will run automatically all tests present in the project (\*.spec.ts).

## Resources used

- [MongoDB](https://www.mongodb.com) - NOSql DB solution
- [RabbitMQ](https://www.rabbitmq.com) - Message queue broker
- [Jest](https://jestjs.io) - Testing suite
- [wait-for-it](https://github.com/vishnubob/wait-for-it) - Wait for the RabbitMQ container to be running before starting the app
- [Multer](https://github.com/expressjs/multer) - Middleware for handling `multipart/form-data`
- [Jimp](https://github.com/oliver-moran/jimp) - Image processing library
