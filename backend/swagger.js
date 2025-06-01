import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'PetClinic API',
      version: '1.0.0',
      description: 'API documentation for PetClinic',
    },
    servers: [
      {
        url: 'http://localhost:3000', 
      },
    ],
  },
  apis: ['./routes/*.js'], 
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
