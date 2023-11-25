import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';
import produit from './produit.model.js';
export const film = sequelize.define('film', {
    id_produit: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
        model: produit,
        key: 'id_produit',
    }
  },
  realisateur: {
    type: DataTypes.STRING(150),
    allowNull:false
  },
  format: {
    type: DataTypes.ENUM,
    values: ['DVD', 'Blue Ray'],
    allowNull: false,
  },
  acteurs: {
    type: DataTypes.STRING(250),
    
  },
  video_extrait: {
    type: DataTypes.STRING(250),
  },
}, {
  timestamps: false,
  freezeTableName: true
});

export default film;
