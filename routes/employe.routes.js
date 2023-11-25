import { Router } from 'express';
import {
  getAllEmployes,
  getEmployeById,
  createEmploye,
  updateEmploye,
  deleteEmploye,
} from '../controllers/employe.controller.js';

const router = Router();

router.get('/', getAllEmployes);
router.get('/:id', getEmployeById);
router.post('/', createEmploye);
router.put('/:id', updateEmploye);
router.delete('/:id', deleteEmploye);

export default router;
