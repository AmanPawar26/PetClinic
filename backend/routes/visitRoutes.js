import express from "express";
import { createNewVisit } from "../controllers/visitController.js";

const router = express.Router();

router.post('/owners/:owner_id/pets/:pet_id/visit', createNewVisit)



export default router;