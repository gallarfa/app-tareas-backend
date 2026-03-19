# 📝 API Gestión de Tareas - Backend

API RESTful completa para la gestión de tareas personales. Desarrollada con Node.js, Express y MongoDB como base de datos.
Este backend permite crear, leer, actualizar y eliminar tareas, y está diseñado con una arquitectura modular, limpia y escalable, 
ideal para integrar con cualquier frontend o para aprender los fundamentos de una API profesional.

---

## 🚀 Tecnologías Utilizadas

- Node.js - Entorno de ejecución JavaScript del lado del servidor
- Express - Framework minimalista para construir APIs REST
- MongoDB - Base de datos NoSQL orientada a documentos
- Mongoose - ODM para modelar los datos de MongoDB
- Git / GitHub - Control de versiones y repositorio remoto
- Dotenv - Manejo de variables de entorno

---

## ✨ Características Principales

- CRUD completo: Crear, Leer, Actualizar y Eliminar tareas
- Base de datos MongoDB: Funciona tanto en local como en la nube (MongoDB Atlas)
- Validaciones: El modelo de tarea valida que el título sea obligatorio
- Fechas automáticas: Timestamps createdAt y updatedAt generados por Mongoose
- Arquitectura modular: Código separado en modelos, rutas y archivo principal
- Código limpio: Comentado, ordenado y listo para escalar
- Listo para producción: Puede desplegarse fácilmente en servicios como Render, Railway o Vercel



## 📁 Estructura del Proyecto

app-tareas-backend/
│
├── models/
│   └── Tarea.js               # Esquema y modelo de datos
│
├── routes/
│   └── tareas.js               # Definición de las rutas CRUD
│
├── .env                         # Variables de entorno (puerto, URI de MongoDB)
├── .gitignore                   # Archivos ignorados por Git
├── package.json                  # Dependencias y scripts
├── package-lock.json             # Versiones exactas de dependencias
├── server.js                     # Punto de entrada del servidor
└── README.md                     # Documentación del proyecto


## 🔧 Instalación y Configuración

### Requisitos previos

- Tener Node.js instalado (v18 o superior)
- Tener MongoDB instalado localmente o una cuenta en MongoDB Atlas (nube)

### Pasos para ejecutar el proyecto localmente

# 1. Clonar el repositorio
git clone https://github.com/gallarfa/app-tareas-backend.git

# 2. Entrar a la carpeta del proyecto
cd app-tareas-backend

# 3. Instalar las dependencias
npm install

# 4. Crear archivo .env en la raíz del proyecto
#    y agregar las siguientes líneas:
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/tareasDB

# 5. Iniciar el servidor
node server.js

El servidor estará disponible en http://localhost:3000


## 📚 Endpoints de la API

| Método | Ruta                | Descripción                         |
| GET    | /api/tareas         | Obtener todas las tareas            |
| GET    | /api/tareas/:id     | Obtener una tarea por su ID         |
| POST   | /api/tareas         | Crear una nueva tarea               |
| PUT    | /api/tareas/:id     | Actualizar una tarea existente      |
| DELETE | /api/tareas/:id     | Eliminar una tarea                  |

### Ejemplo de uso con PowerShell

# Crear una tarea
Invoke-WebRequest -Uri http://localhost:3000/api/tareas -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"titulo":"Aprender MongoDB"}'

# Ver todas las tareas
Invoke-WebRequest -Uri http://localhost:3000/api/tareas


## 🗄️ Modelo de Datos (Tarea)

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
  timestamps: true
});


Ejemplo de un documento en MongoDB:

{
  "_id": "67db123456789abcdef",
  "titulo": "Aprender MongoDB",
  "completada": false,
  "createdAt": "2025-03-19T00:00:00.000Z",
  "updatedAt": "2025-03-19T00:00:00.000Z"
}



## 🛠️ Comandos Útiles

# Iniciar el servidor
node server.js

# Verificar que MongoDB está corriendo
mongosh


## 🚀 Próximas Mejoras

- Frontend en React para consumir la API
- Autenticación con JWT (registro y login de usuarios)
- Relación usuario-tarea (cada usuario ve solo sus tareas)
- Despliegue en Render / Railway / Vercel


## 📫 Contacto

- Email: gallarfa.29@gmail.com
- LinkedIn: linkedin.com/in/gallarfa
- Portfolio: https://portfolio-eight-psi-k7r98buv9n.vercel.app
⌨️ Desarrollado con ❤️ por Fernando Gallardo
🚀 En búsqueda de mi primera oportunidad en IT
