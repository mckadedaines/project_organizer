const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Group 9 API',
    description: '',
  },
  host: 'localhost:3000',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);