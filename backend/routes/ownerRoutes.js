import express from 'express';
import * as ownerController from '../controllers/ownerController.js';

const router = express.Router();

router.get('/owners', ownerController.getAllOwners);
router.get('/owners/find', ownerController.getOwnerByLastName);
router.get('/owners/:owner_id', ownerController.getOwnerById);
router.post('/owners', ownerController.createOwner);
router.put('/owners/:owner_id', ownerController.updateOwner);

export default router;
