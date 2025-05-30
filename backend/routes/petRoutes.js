import express from "express";
import {createPet, updatePet} from '../controllers/petController.js'

const router = express.Router();

router.post('/owners/:owner_id/pets', createPet);
router.put('/owners/:owner_id/pets/:pet_id', updatePet);

export default router;
