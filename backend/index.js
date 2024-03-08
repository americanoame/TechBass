import dotenv from 'dotenv';
import express from 'express';
import connnectDb from './config/db.js';

const port = process.env.PORT || 8000;


dotenv.config();
const app = express();

connnectDb();

app.use(express.json());

app.get('/', (req, res) => {
  return res.send({
    message: 'Welcome to e commerce app',
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
