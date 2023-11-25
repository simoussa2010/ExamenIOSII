import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';
import produit from './produit.model.js';
export const livre = sequelize.define('livre', {
    id_produit: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
        model: produit,
        key: 'id_produit',
    }
  },
  auteurs: {
    type: DataTypes.STRING(100),
    allowNull:false
  },

  editeur: {
    type: DataTypes.STRING(100),
    
  },
  date_publication: {
    type: DataTypes.DATE,
    
  },
  ISBN: {
    type: DataTypes.STRING(14),
    
  },
  
}, {
  timestamps: false,
  freezeTableName: true
});

export default livre;