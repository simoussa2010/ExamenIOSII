import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';
import commande from './commande.model.js';

export const livraison = sequelize.define('livraison', {
    numero_commande: {
       type: DataTypes.INTEGER,   
       primaryKey: true,
       allowNull: false,
       references: {
           model: commande,
           key: 'numero_commande',
       }
  },
  date_liv_prevue: {
    type: DataTypes.DATE,
  },
  date_liv_reel: {
    type: DataTypes.DATE,
  },
  adresse_livraison: {
    type: DataTypes.STRING(250),
    
    
  },
  etat: {
    type: DataTypes.STRING(10),

    allowNull: false,
    
  },

}, {
  timestamps: false,
  freezeTableName: true
});

export default livraison;
