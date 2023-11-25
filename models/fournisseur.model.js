import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';

export const fournisseur = sequelize.define('fournisseur', {
    id_fournisseur: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nom_entreprise: {
    type: DataTypes.STRING(20),
  },
  adresse: {
    type: DataTypes.STRING(50),
  },
  
}, {
  timestamps: false,
  freezeTableName: true
});

export default fournisseur;
