import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.1.0', // ✅ Use 3.0.0 for better compatibility
    info: {
      title: 'PetClinic API',
      version: '1.0.0',
      description: 'API documentation for PetClinic',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Adjust to match your actual running server
      },
    ],
  },
  apis: ['./backend/routes/*.js'], // Make sure this path matches your route files
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
