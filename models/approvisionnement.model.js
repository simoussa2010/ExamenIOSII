import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';
import fournisseur from './fournisseur.model.js';
import employe from './employe.model.js';
export const approvisionnement = sequelize.define('approvisionnement', {
    id_approvisionnement: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  date_approv: {
    type: DataTypes.DATE,
  },
  id_fournisseur: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: fournisseur,
        key: 'id_fournisseur',
    }
  },
  matricule_empl: {
    type: DataTypes.STRING(10),

    allowNull: false,
    references: {
        model: employe,
        key: 'matricule_empl',
    }
  },

}, {
  timestamps: false,
  freezeTableName: true
});

export default approvisionnement;
