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
// GET /api/tareas/:id - Obtener una tarea por ID
router.get('/:id', async (req, res) => {
  try {
    const tarea = await Tarea.findById(req.params.id);
    if (!tarea) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.json(tarea);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /api/tareas/:id - Actualizar una tarea
router.put('/:id', async (req, res) => {
  try {
    const tareaActualizada = await Tarea.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!tareaActualizada) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.json(tareaActualizada);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /api/tareas/:id - Eliminar una tarea
router.delete('/:id', async (req, res) => {
  try {
    const tareaEliminada = await Tarea.findByIdAndDelete(req.params.id);
    if (!tareaEliminada) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.json({ message: 'Tarea eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});