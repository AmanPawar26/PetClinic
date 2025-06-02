import express from "express";
import { createPetType, getAllPetType } from "../controllers/petTypeController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: PetTypes
 *   description: Pet types management
 */

/**
 * @swagger
 * /pet-types:
 *   post:
 *     summary: Create a new pet type
 *     tags: [PetTypes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: Dog
 *     responses:
 *       201:
 *         description: Pet type created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/pet-types', createPetType);

/**
 * @swagger
 * /pet-types:
 *   get:
 *     summary: Get all pet types
 *     tags: [PetTypes]
 *     responses:
 *       200:
 *         description: A list of pet types
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Dog
 */
router.get('/pet-types', getAllPetType);

export default router;
