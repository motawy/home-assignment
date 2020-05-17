# Backend selection home assignment

Simple backend service realised with Typescript, Node.js, MongoDB and RabbitMQ. <br/>
The service is composed by 3 endpoints:
- Get all photos in the DB
- Create a new photo and send a background job to resize the image
- Send a background job to resize the image with the given id

## Prerequisite
To run the project you'll need to clone the repo and install the dependencies using
```
yarn OR npm install
```
The project is based on Docker.

## Getting started
 To run the project:
```
yarn up
```

## Tests
To test all aspects you'll need a running application since some tests depends on RabbitMQ and MongoDB. Using Jest and Frisby made it easier to test endpoints and parts of this demo. I used postman to see the results of the work. I attached a file `home_assignment.postman_collection.json` with the 3 endpoints. 
```
yarn test OR npm run test
```
This command will run automatically all tests present in the project (\*.spec.ts).

### How I tested the application
The tests were written to test the main functionalities and parts of code. The use of typescript reduces the need for some simple tests, i.e.: testing for input types, return types 
Initially, I set up a MongoDB in-memory database to avoid running tests on a production database, which will insert or read data from it. Since in production there won't be all testing suits because they are dev dependencies, I decided to remove it and proceed without it. 

## Built With

- [MongoDB](https://www.mongodb.com) - NoSql DB solution
- [RabbitMQ](https://www.rabbitmq.com) - Message queue broker
- [Jest](https://jestjs.io) - Testing suite
- [Frisby](https://docs.frisbyjs.com) - Easy endpoint testing solution
- [wait-for-it](https://github.com/vishnubob/wait-for-it) - Solution to wait for the RabbitMQ container to be running before starting the app
- [Multer](https://github.com/expressjs/multer) - Middleware for handling `multipart/form-data`
- [Jimp](https://github.com/oliver-moran/jimp) - Image processing library
