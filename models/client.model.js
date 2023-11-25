import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';

export const client = sequelize.define('client', {
    id_client: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nom: {
    type: DataTypes.STRING(20),
  },
  prenom: {
    type: DataTypes.STRING(20),
  },
  courriel: {
    type: DataTypes.STRING(20),
  },
  telephone: {
    type: DataTypes.STRING(20),
  },
  adresse: {
    type: DataTypes.STRING(50),
  },
  photo: {
    type: DataTypes.STRING(20),
  },
  password: {
    type: DataTypes.STRING(10),
  },
}, {
  timestamps: false,
  freezeTableName: true
});

export default client;
