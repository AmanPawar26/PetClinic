import express from "express";
import { createNewVisit } from "../controllers/visitController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Visits
 *   description: Pet visit management
 */

/**
 * @swagger
 * /owners/{owner_id}/pets/{pet_id}/visit:
 *   post:
 *     summary: Create a new visit for a specific pet under an owner
 *     tags: [Visits]
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
 *         description: ID of the pet
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - date
 *               - description
 *             properties:
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2024-05-15
 *               description:
 *                 type: string
 *                 example: Regular check-up and vaccinations
 *     responses:
 *       201:
 *         description: Visit created successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Owner or Pet not found
 */
router.post('/owners/:owner_id/pets/:pet_id/visit', createNewVisit);

export default router;
