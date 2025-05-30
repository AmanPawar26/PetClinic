import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import ownerRoutes from './routes/ownerRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', ownerRoutes);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

export default app;
