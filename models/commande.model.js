import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';
import client from './client.model.js';
export const commande = sequelize.define('commande', {
    numero_commande: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  date_commande: {
    type: DataTypes.DATE,
  },
  id_client: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: client,
        key: 'id_client',
    }
  },
  etat: {
    type: DataTypes.STRING(10),

    allowNull: false,
    
  },

}, {
  timestamps: false,
  freezeTableName: true
});

export default commande;
