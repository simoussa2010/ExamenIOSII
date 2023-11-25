import Categorie from '../models/categorie.model.js';

export const getAllCategories = async (req, res, next) => {
  try {
    const categories = await Categorie.findAll();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

export const getCategorieById = async (req, res, next) => {
  try {
    const categorie = await Categorie.findByPk(req.params.id);
    if (categorie) {
      res.status(200).json(categorie);
    } else {
      res.status(404).json({ message: 'Categorie not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const createCategorie = async (req, res, next) => {
  try {
    const categorie = await Categorie.create(req.body);
    res.status(201).json(categorie);
  } catch (error) {
    next(error);
  }
};

export const updateCategorie = async (req, res, next) => {
  try {
    const categorie = await Categorie.findByPk(req.params.id);
    if (categorie) {
      await categorie.update(req.body);
      res.status(200).json(categorie);
    } else {
      res.status(404).json({ message: 'Categorie not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteCategorie = async (req, res, next) => {
  try {
    const categorie = await Categorie.findByPk(req.params.id);
    if (categorie) {
      await categorie.destroy();
      res.status(200).json({ message: 'Categorie deleted' });
    } else {
      res.status(404).json({ message: 'Categorie not found' });
    }
  } catch (error) {
    next(error);
  }
};
