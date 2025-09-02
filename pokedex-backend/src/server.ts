import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import pokemonRoutes from './routes/pokemonRoutes.js'; 
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Rotas de autenticação
app.use('/api/auth', authRoutes);
// Rotas de pokémon
app.use('/api/pokemon', pokemonRoutes); 

app.get('/', (req, res) => {
  res.send('API da Pokédex funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});