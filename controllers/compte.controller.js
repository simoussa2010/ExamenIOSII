import Compte from '../models/compte.model.js';
import { Sequelize } from 'sequelize';



export const getAllAccounts = async (req, res, next) => {
  try {
    const comptes = await Compte.findAll();
    res.status(200).json(comptes);
  } catch (error) {
    next(error);
  }
};


export const getAccount = async (req, res, next) => {
  try {
    const compte = await Compte.findByPk(req.params.id);
    if (compte) {
      res.status(200).json(compte);
    } else {
      res.status(404).json({ message: 'Compte not found' });
    }
  } catch (error) {
    next(error);
  }
};


export const closeAccount = async (req, res, next) => {
  try {
    const compte = await Compte.findByPk(req.params.id);
    if (compte) {
      await compte.destroy();
      res.status(200).json({ message: 'Compte deleted' });
    } else {
      res.status(404).json({ message: 'Compte not found' });
    }
  } catch (error) {
    next(error);
  }
};
