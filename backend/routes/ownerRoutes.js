import express from 'express';
import * as ownerController from '../controllers/ownerController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Owners
 *   description: Owner management
 */

/**
 * @swagger
 * /owners:
 *   get:
 *     summary: Get all owners
 *     tags: [Owners]
 *     responses:
 *       200:
 *         description: List of owners
 */
router.get('/owners', ownerController.getAllOwners);

/**
 * @swagger
 * /owners/find:
 *   get:
 *     summary: Get owners by last name
 *     tags: [Owners]
 *     parameters:
 *       - in: query
 *         name: lastName
 *         required: true
 *         schema:
 *           type: string
 *         description: The owner's last name
 *     responses:
 *       200:
 *         description: A list of matching owners
 */
router.get('/owners/find', ownerController.getOwnerByLastName);

/**
 * @swagger
 * /owners/{owner_id}:
 *   get:
 *     summary: Get owner by ID
 *     tags: [Owners]
 *     parameters:
 *       - in: path
 *         name: owner_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the owner
 *     responses:
 *       200:
 *         description: Owner found
 *       404:
 *         description: Owner not found
 */
router.get('/owners/:owner_id', ownerController.getOwnerById);

/**
 * @swagger 
 * /owners:
 *   post:
 *     summary: Create a new owner
 *     tags: [Owners]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - first_name
 *               - last_name
 *               - address
 *               - city
 *               - telephone
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               address:
 *                 type: string
 *               city:
 *                 type: string
 *               telephone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Owner created successfully
 */
router.post('/owners', ownerController.createOwner);

/**
 * @swagger
 * /owners/{owner_id}:
 *   put:
 *     summary: Update an existing owner
 *     tags: [Owners]
 *     parameters:
 *       - in: path
 *         name: owner_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the owner to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               address:
 *                 type: string
 *               city:
 *                 type: string
 *               telephone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Owner updated successfully
 *       404:
 *         description: Owner not found
 */
router.put('/owners/:owner_id', ownerController.updateOwner);

export default router;
