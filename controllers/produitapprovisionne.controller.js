import Produitapprovisionne from '../models/produitapprovisionne.model.js';

export const getAllProduitapprovisionnes = async (req, res, next) => {
  try {
    const produitapprovisionnes = await Produitapprovisionne.findAll();
    res.status(200).json(produitapprovisionnes);
  } catch (error) {
    next(error);
  }
};

export const getProduitapprovisionneById = async (req, res, next) => {
  try {
    const produitapprovisionne = await Produitapprovisionne.findByPk(req.params.id);
    if (produitapprovisionne) {
      res.status(200).json(produitapprovisionne);
    } else {
      res.status(404).json({ message: 'Produit approvisionne not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const createProduitapprovisionne = async (req, res, next) => {
  try {
    const produitapprovisionne = await Produitapprovisionne.create(req.body);
    res.status(201).json(produitapprovisionne);
  } catch (error) {
    next(error);
  }
};

export const updateProduitapprovisionne = async (req, res, next) => {
  try {
    const produitapprovisionne = await Produitapprovisionne.findByPk(req.params.id);
    if (produitapprovisionne) {
      await produitapprovisionne.update(req.body);
      res.status(200).json(produitapprovisionne);
    } else {
      res.status(404).json({ message: 'Produit approvisionne not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteProduitapprovisionne = async (req, res, next) => {
  try {
    const produitapprovisionne = await Produitapprovisionne.findByPk(req.params.id);
    if (produitapprovisionne) {
      await produitapprovisionne.destroy();
      res.status(200).json({ message: 'Produit approvisionne deleted' });
    } else {
      res.status(404).json({ message: 'Produit approvisionne not found' });
    }
  } catch (error) {
    next(error);
  }
};
