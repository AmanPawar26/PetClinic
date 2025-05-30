import express from "express";
import { createPetType, getAllPetType } from "../controllers/petTypeController.js"

const router = express.Router();

router.post('/pet-types', createPetType);
router.get('/pet-types', getAllPetType);

export default router;