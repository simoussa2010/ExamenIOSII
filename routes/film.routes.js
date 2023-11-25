import { Router } from 'express';
import {
  getAllFilms,
  getFilmById,
  createFilm,
  updateFilm,
  deleteFilm,
} from '../controllers/film.controller.js';

const router = Router();

router.get('/', getAllFilms);
router.get('/:id', getFilmById);
router.post('/', createFilm);
router.put('/:id', updateFilm);
router.delete('/:id', deleteFilm);

export default router;
