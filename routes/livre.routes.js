import { Router } from 'express';
import {
  getAllLivres,
  getLivreById,
  createLivre,
  updateLivre,
  deleteLivre,
} from '../controllers/livre.controller.js';

const router = Router();

router.get('/', getAllLivres);
router.get('/:id', getLivreById);
router.post('/', createLivre);
router.put('/:id', updateLivre);
router.delete('/:id', deleteLivre);

export default router;
