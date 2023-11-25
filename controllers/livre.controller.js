import Livre from '../models/livre.model.js';

export const getAllLivres = async (req, res, next) => {
  try {
    const livres = await Livre.findAll();
    res.status(200).json(livres);
  } catch (error) {
    next(error);
  }
};

export const getLivreById = async (req, res, next) => {
  try {
    const livre = await Livre.findByPk(req.params.id);
    if (livre) {
      res.status(200).json(livre);
    } else {
      res.status(404).json({ message: 'Livre not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const createLivre = async (req, res, next) => {
  try {
    const livre = await Livre.create(req.body);
    res.status(201).json(livre);
  } catch (error) {
    next(error);
  }
};

export const updateLivre = async (req, res, next) => {
  try {
    const livre = await Livre.findByPk(req.params.id);
    if (livre) {
      await livre.update(req.body);
      res.status(200).json(livre);
    } else {
      res.status(404).json({ message: 'Livre not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteLivre = async (req, res, next) => {
  try {
    const livre = await Livre.findByPk(req.params.id);
    if (livre) {
      await livre.destroy();
      res.status(200).json({ message: 'Livre deleted' });
    } else {
      res.status(404).json({ message: 'Livre not found' });
    }
  } catch (error) {
    next(error);
  }
};
