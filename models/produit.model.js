import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';
import categorie from './categorie.model.js';
export const produit = sequelize.define('produit', {
    id_produit: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true,
    allowNull: false,
  },
  titre: {
    type: DataTypes.STRING(100),
    allowNull:false
  },

  image: {
    type: DataTypes.STRING(50),
    
  },
  prix: {
    type: DataTypes.DECIMAL(6,2),
    
  },
  qte_en_stock: {
    type: DataTypes.INTEGER,
    
  },
  qte_min_stock: {
    type: DataTypes.INTEGER,
    
  },
  description_produit: {
    type: DataTypes.STRING(250),
    
  },
  etat: {
    type: DataTypes.STRING(50),
    
  },
  id_categorie: {
    type: DataTypes.INTEGER,
    allowNull:false,
    references: {
        model: categorie,
        key: 'id_categorie',
    }
  },

}, {
  timestamps: false,
  freezeTableName: true
});

export default produit;