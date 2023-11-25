import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';

export const categorie = sequelize.define('categorie', {
  id_categorie: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  categorie_produit: {
    type: DataTypes.STRING,
  },
  type_produit: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false,
  freezeTableName: true
});

export default categorie;
