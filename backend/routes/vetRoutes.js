import express from 'express';
import * as vetController from "../controllers/vetController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Vets
 *   description: Veterinarian management
 */

/**
 * @swagger
 * /vets:
 *   get:
 *     summary: Get all veterinarians
 *     tags: [Vets]
 *     responses:
 *       200:
 *         description: A list of veterinarians
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
 *                     example: Dr. Jane Smith
 *                   specialty:
 *                     type: string
 *                     example: Surgery
 */
router.get('/vets', vetController.getAllVets);

export default router;
