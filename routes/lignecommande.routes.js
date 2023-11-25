import { Router } from 'express';
import {
  getAllLignecommandes,
  getLignecommandeById,
  createLignecommande,
  updateLignecommande,
  deleteLignecommande,
} from '../controllers/lignecommande.controller.js';

const router = Router();

router.get('/', getAllLignecommandes);
router.get('/:id', getLignecommandeById);
router.post('/', createLignecommande);
router.put('/:id', updateLignecommande);
router.delete('/:id', deleteLignecommande);

export default router;