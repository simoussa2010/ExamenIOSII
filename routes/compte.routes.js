import { Router } from 'express';
import {
  getAllAccounts,
  getAccount,
  closeAccount

} from '../controllers/compte.controller.js';

const router = Router();

router.get('/', getAllAccounts);


router.get('/:id', getAccount);

router.delete('/:id', closeAccount);

export default router;
