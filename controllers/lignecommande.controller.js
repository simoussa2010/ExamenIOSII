import Lignecommande from '../models/lignecommande.model.js';

export const getAllLignecommandes = async (req, res, next) => {
  try {
    const lignecommandes = await Lignecommande.findAll();
    res.status(200).json(lignecommandes);
  } catch (error) {
    next(error);
  }
};

export const getLignecommandeById = async (req, res, next) => {
  try {
    const lignecommande = await Lignecommande.findByPk(req.params.id);
    if (lignecommande) {
      res.status(200).json(lignecommande);
    } else {
      res.status(404).json({ message: 'Lignecommande not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const createLignecommande = async (req, res, next) => {
  try {
    const lignecommande = await Lignecommande.create(req.body);
    res.status(201).json(lignecommande);
  } catch (error) {
    next(error);
  }
};

export const updateLignecommande = async (req, res, next) => {
  try {
    const lignecommande = await Lignecommande.findByPk(req.params.id);
    if (lignecommande) {
      await lignecommande.update(req.body);
      res.status(200).json(lignecommande);
    } else {
      res.status(404).json({ message: 'Ligne commande not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteLignecommande = async (req, res, next) => {
  try {
    const lignecommande = await Lignecommande.findByPk(req.params.id);
    if (lignecommande) {
      await lignecommande.destroy();
      res.status(200).json({ message: 'Ligne commande deleted' });
    } else {
      res.status(404).json({ message: 'Ligne commande not found' });
    }
  } catch (error) {
    next(error);
  }
};
