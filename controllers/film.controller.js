import Film from '../models/film.model.js';

export const getAllFilms = async (req, res, next) => {
  try {
    const films = await Film.findAll();
    res.status(200).json(films);
  } catch (error) {
    next(error);
  }
};

export const getFilmById = async (req, res, next) => {
  try {
    const film = await Film.findByPk(req.params.id);
    if (categorie) {
      res.status(200).json(film);
    } else {
      res.status(404).json({ message: 'Film not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const createFilm = async (req, res, next) => {
  try {
    const film = await Film.create(req.body);
    res.status(201).json(film);
  } catch (error) {
    next(error);
  }
};

export const updateFilm = async (req, res, next) => {
  try {
    const film = await Film.findByPk(req.params.id);
    if (categorie) {
      await film.update(req.body);
      res.status(200).json(film);
    } else {
      res.status(404).json({ message: 'Film not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteFilm = async (req, res, next) => {
  try {
    const film = await Film.findByPk(req.params.id);
    if (film) {
      await film.destroy();
      res.status(200).json({ message: 'Film deleted' });
    } else {
      res.status(404).json({ message: 'Film not found' });
    }
  } catch (error) {
    next(error);
  }
};
