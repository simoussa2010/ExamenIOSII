import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import compteRouter from './routes/compte.routes.js';


import { errorHandler } from './middlewares/errorHandler.js';
import { sequelize } from './config/config.js';
import { config } from 'dotenv';
import { Sequelize } from 'sequelize';

config();

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.use('/Banque/compte', compteRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 2000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
});
