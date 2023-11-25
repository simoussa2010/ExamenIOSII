import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';
import commande from './commande.model.js';
import produit from './produit.model.js';
export const lignecommande = sequelize.define('lignecommande', {
    numero_commande: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    allowNull: false,
    references: {
      model: commande,
      key: 'numero_commande',
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
  quantite_commandee: {
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

export default lignecommande;
