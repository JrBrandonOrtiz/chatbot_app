import express from 'express';
import cors from 'cors';
import messageRoutes from './routes/messages.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenido a mi ChatBot');
});

app.use('/api', messageRoutes);

export default app;
