
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';

export const compte = sequelize.define('Compte', {
  numero: {
    type: DataTypes.STRING(6),
    primaryKey: true,
    allowNull: false,
  },
  typeCompte: {
    type: DataTypes.ENUM('Cheque', 'Epargne', 'CELI'),
    allowNull: false,
  },
  solde: {
    type: DataTypes.DECIMAL(10, 2),
  },
  devise: {
    type: DataTypes.ENUM('CAD', 'USD', 'EUR'),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(50),
  },
}, {
  timestamps: false,
  freezeTableName: true
});

export default compte;