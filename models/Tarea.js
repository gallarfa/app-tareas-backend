import mongoose from 'mongoose';

const tareaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, 'El título es obligatorio'],
    trim: true
  },
  descripcion: {
    type: String,
    trim: true
  },
  completada: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true // Agrega automáticamente createdAt y updatedAt
});

export default mongoose.model('Tarea', tareaSchema);