import { Router } from 'express';
import {
  getAllFournisseurs,
  getFournisseurById,
  createFournisseur,
  updateFournisseur,
  deleteFournisseur,
} from '../controllers/fournisseur.controller.js';

const router = Router();

router.get('/', getAllFournisseurs);
router.get('/:id', getFournisseurById);
router.post('/', createFournisseur);
router.put('/:id', updateFournisseur);
router.delete('/:id', deleteFournisseur);

export default router;
