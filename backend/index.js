import express from 'express';

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.send({
    message: 'Welcome to e commerce app',
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
