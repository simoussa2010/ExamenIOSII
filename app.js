import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import categorieRouter from './routes/categorie.routes.js';
import approvisionnementRouter from './routes/approvisionnement.routes.js';
import clientRouter from './routes/client.routes.js';
import commandeRouter from './routes/commande.routes.js';
import employeRouter from './routes/employe.routes.js';
import filmRouter from './routes/film.routes.js';
import fournisseurRouter from './routes/fournisseur.routes.js';
import jeuRouter from './routes/jeu.routes.js';
import lignecommandeRouter from './routes/lignecommande.routes.js';
import livraisonRouter from './routes/livraison.routes.js';
import livreRouter from './routes/livre.routes.js';
import produitRouter from './routes/produit.routes.js';
import produitapprovisionneRouter from './routes/produitapprovisionne.routes.js';

import { errorHandler } from './middlewares/errorHandler.js';
import { sequelize } from './config/config.js';
import { config } from 'dotenv';

config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/brookAPI/categories', categorieRouter);
app.use('/brookAPI/approvisionnement', approvisionnementRouter);
app.use('/brookAPI/client', clientRouter);
app.use('/brookAPI/commande', commandeRouter);
app.use('/brookAPI/employe', employeRouter);
app.use('/brookAPI/film', filmRouter);
app.use('/brookAPI/fournisseur', fournisseurRouter);
app.use('/brookAPI/jeu', jeuRouter);
app.use('/brookAPI/ligneCommande', lignecommandeRouter);
app.use('/brookAPI/livraison', livraisonRouter);
app.use('/brookAPI/livre', livreRouter);
app.use('/brookAPI/produit', produitRouter);
app.use('/brookAPI/produitApprovisionne', produitapprovisionneRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
});
