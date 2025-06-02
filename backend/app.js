import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import ownerRoutes from './routes/ownerRoutes.js';
import petTypeRoutes from './routes/petTypeRoutes.js';
import petRoutes from './routes/petRoutes.js';
import visitRoutes from './routes/visitRoutes.js';
import vetRoutes from './routes/vetRoutes.js';
import swaggerSpec from './swagger.js';
import swaggerUi from 'swagger-ui-express';

const app = express();

app.use(express.json());
app.use(cors());

// Swagger route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


//ROUTES
app.use('/', ownerRoutes);
app.use('/', petTypeRoutes);
app.use('/', petRoutes);
app.use('/', visitRoutes);
app.use('/', vetRoutes);


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

export default app;
