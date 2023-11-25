import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';
import produit from './produit.model.js';
export const jeux = sequelize.define('jeux', {
    id_produit: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
        model: produit,
        key: 'id_produit',
    }
  },
  acteurs: {
    type: DataTypes.STRING(250),
    allowNull:false
  },

  collection: {
    type: DataTypes.STRING(100),
    
  },
  
}, {
  timestamps: false,
  freezeTableName: true
});

export default jeux;
