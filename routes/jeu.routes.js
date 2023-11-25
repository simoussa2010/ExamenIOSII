import { Router } from 'express';
import {
  getAllJeux,
  getJeuById,
  createJeu,
  updateJeu,
  deleteJeu,
} from '../controllers/jeu.controller.js';

const router = Router();

router.get('/', getAllJeux);
router.get('/:id', getJeuById);
router.post('/', createJeu);
router.put('/:id', updateJeu);
router.delete('/:id', deleteJeu);

export default router;
