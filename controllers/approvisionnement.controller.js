import Approvisionnement from '../models/approvisionnement.model.js';

export const getAllApprovisionnements = async (req, res, next) => {
  try {
    const approvisionnements = await Approvisionnement.findAll();
    res.status(200).json(approvisionnements);
  } catch (error) {
    next(error);
  }
};

export const getApprovisionnementById = async (req, res, next) => {
  try {
    const approvisionnement = await Approvisionnement.findByPk(req.params.id);
    if (approvisionnement) {
      res.status(200).json(approvisionnement);
    } else {
      res.status(404).json({ message: 'Approvisionnement not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const createApprovisionnement = async (req, res, next) => {
  try {
    const approvisionnement = await Approvisionnement.create(req.body);
    res.status(201).json(approvisionnement);
  } catch (error) {
    next(error);
  }
};

export const updateApprovisionnement = async (req, res, next) => {
  try {
    const approvisionnement = await Approvisionnement.findByPk(req.params.id);
    if (approvisionnement) {
      await approvisionnement.update(req.body);
      res.status(200).json(approvisionnement);
    } else {
      res.status(404).json({ message: 'Approvisionnement not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteApprovisionnement = async (req, res, next) => {
  try {
    const approvisionnement = await Approvisionnement.findByPk(req.params.id);
    if (approvisionnement) {
      await approvisionnement.destroy();
      res.status(200).json({ message: 'Approvisionnement deleted' });
    } else {
      res.status(404).json({ message: 'Approvisionnement not found' });
    }
  } catch (error) {
    next(error);
  }
};
