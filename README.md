# Backend selection home assignment

Simple backend service realised with Typescript, Node.js, MongoDB and RabbitMQ. <br/>
The service is composed by 3 endpoints:
- Get all photos in the DB
- Create a new photo and send a background job to resize the image
- Send a background job to resize the image with the given id

## Prerequisite
To run the project you'll need to clone the repo and install the dependencies
```
yarn OR npm install
```
The project is based on Docker.

## Getting started
 To run the project:
```
docker-compose up
```

## Tests
To test all aspects you'll need an instance of RabbitMQ running or some tests will fail. You can do that by <br/>
MongoDB uses an in-memory DB for testing purposes to save data in memory to avoid to write on the DB during tests.
To start testing simply run
```
yarn test OR npm run test
```
This command will run automatically all tests present in the project (\*.spec.ts).

### What the tests look for
The tests were written to test the main functionalities. The use of typescript reduces the need for other simple tests, i.e.: testing for input types. 

## Built With

- [MongoDB](https://www.mongodb.com) - NoSql DB solution
- [RabbitMQ](https://www.rabbitmq.com) - Message queue broker
- [Jest](https://jestjs.io) - Testing suite
- [wait-for-it](https://github.com/vishnubob/wait-for-it) - Solution to wait for the RabbitMQ container to be running before starting the app
- [Multer](https://github.com/expressjs/multer) - Middleware for handling `multipart/form-data`
- [Jimp](https://github.com/oliver-moran/jimp) - Image processing library
