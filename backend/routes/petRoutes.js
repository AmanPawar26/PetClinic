import express from "express";
import {createPet, updatePet} from '../controllers/petController.js'

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Pets
 *   description: Pet management
 */

/**
 * @swagger
 * /owners/{owner_id}/pets:
 *   post:
 *     summary: Create a new pet under a specific owner
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: owner_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the owner
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - birth_date
 *               - type_id
 *             properties:
 *               name:
 *                 type: string
 *                 example: Bruno
 *               birth_date:
 *                 type: string
 *                 format: date
 *                 example: 2022-05-01
 *               type_id:
 *                 type: integer
 *                 example: 5
 *     responses:
 *       201:
 *         description: Pet created successfully
 *       400:
 *         description: Invalid input
 */


router.post('/owners/:owner_id/pets', createPet);

/**
 * @swagger
 * /owners/{owner_id}/pets/{pet_id}:
 *   put:
 *     summary: Update a pet under a specific owner
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: owner_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the owner
 *       - in: path
 *         name: pet_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the pet to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object 
 *             required:
 *               - name
 *               - birth_date
 *               - type_id
 *             properties:
 *               name:
 *                 type: string
 *                 example: Buddy
 *               birth_date:
 *                 type: string
 *                 format: date
 *                 example: 2021-06-15
 *               type_id:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: Pet updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Pet not found
 */

router.put('/owners/:owner_id/pets/:pet_id', updatePet);

export default router;