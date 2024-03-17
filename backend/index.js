import dotenv from 'dotenv';
import express from 'express';
import connnectDb from './config/db.js';
import authRoutes from './routes/auth.js';
import cors from 'cors';

const port = process.env.PORT || 8000;
dotenv.config();
const app = express();
connnectDb();
app.use(express.json());
app.use(cors());

// Consoling requset.body for debugging
app.use((req, res, next) => {
  console.log(req.body);
  next();
});


app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
  return res.send({
    message: 'Welcome to e commerce app',
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
