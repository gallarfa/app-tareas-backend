import express from 'express';
import Tarea from '../models/Tarea.js';

const router = express.Router();

// GET /api/tareas - Obtener todas las tareas
router.get('/', async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/tareas - Crear una nueva tarea
router.post('/', async (req, res) => {
  try {
    const nuevaTarea = await Tarea.create(req.body);
    res.status(201).json(nuevaTarea);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;