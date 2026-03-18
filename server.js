import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import tareasRoutes from './routes/tareas.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rutas
app.use('/api/tareas', tareasRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API de App de Tareas funcionando 🚀' });
});

// Conexión a MongoDB (esto va UNA SOLA VEZ, fuera de las rutas)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error:', err));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});