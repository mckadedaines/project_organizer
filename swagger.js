const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Collaborative Project Organizer',
    description: '',
  },
  host: 'team-project-k2vn.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);