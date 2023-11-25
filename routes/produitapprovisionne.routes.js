import { Router } from 'express';
import {
  getAllProduitapprovisionnes,
  getProduitapprovisionneById,
  createProduitapprovisionne,
  updateProduitapprovisionne,
  deleteProduitapprovisionne,
} from '../controllers/produitapprovisionne.controller.js';

const router = Router();

router.get('/', getAllProduitapprovisionnes);
router.get('/:id', getProduitapprovisionneById);
router.post('/', createProduitapprovisionne);
router.put('/:id', updateProduitapprovisionne);
router.delete('/:id', deleteProduitapprovisionne);

export default router;
