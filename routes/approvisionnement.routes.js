import { Router } from 'express';
import {
  getAllApprovisionnements,
  getApprovisionnementById,
  createApprovisionnement,
  updateApprovisionnement,
  deleteApprovisionnement,
} from '../controllers/approvisionnement.controller.js';

const router = Router();

router.get('/', getAllApprovisionnements);
router.get('/:id', getApprovisionnementById);
router.post('/', createApprovisionnement);
router.put('/:id', updateApprovisionnement);
router.delete('/:id', deleteApprovisionnement);

export default router;
