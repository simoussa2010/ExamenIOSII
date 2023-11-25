import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';

export const employe = sequelize.define('employe', {
    matricule_empl: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    allowNull: false,
  },
  nom_empl: {
    type: DataTypes.STRING(20),
  },
  prenom_empl: {
    type: DataTypes.STRING(20),
  },
  courriel_empl: {
    type: DataTypes.STRING(20),
  },
  password_empl: {
    type: DataTypes.STRING(10),
  },
}, {
  timestamps: false,
  freezeTableName: true
});

export default employe;
