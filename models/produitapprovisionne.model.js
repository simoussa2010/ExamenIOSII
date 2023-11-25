import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';
import produit from './produit.model.js';
import approvisionnement from './approvisionnement.model.js';

export const produitapprovisionne = sequelize.define('produitapprovisionne', {
    id_approvisionnement: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    allowNull: false,
    references: {
      model: approvisionnement,
      key: 'id_approvisionnement',
     }
  },
 
  id_produit: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    allowNull: false,
    references: {
        model: produit,
        key: 'id_produit',
    }
  },
  qte_approv: {
    type: DataTypes.INTEGER,
    allowNull: false,
    
  },
  prix_reel: {
    type: DataTypes.DECIMAL(6.2),
    
  },

}, {
  timestamps: false,
  freezeTableName: true
});

export default produitapprovisionne;
