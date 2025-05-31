import express from 'express';
import * as vetController from "../controllers/vetController.js";

const router = express.Router();

router.get('/vets', vetController.getAllVets);

export default router;