
🤖 Chatbot App – Prueba Técnica Fullstack (Node.js + React)

Aplicación web que permite a los usuarios interactuar con un chatbot impulsado por inteligencia artificial. Desarrollada como una prueba técnica fullstack, integra un frontend en React, un backend en Node.js/Express y una base de datos MySQL, todo desplegado en la nube.

Enlaces en Producción

- Frontend (Vercel): https://chatbot-app-three-topaz.vercel.app/
- Backend (Render): https://chatbot-backend-cznd.onrender.com
- Documentación API : [text](chatbot_api_swagger_doc.js)

Tecnologías Utilizadas

Backend
- Node.js con Express.js
- TypeScript
- MySQL (Railway)
- OpenAI API para generación de respuestas
- Swagger para documentación de la API
- Render para despliegue

Frontend
- React.js
- TypeScript
- Axios para peticiones HTTP
- CSS para estilos
- Vercel para despliegue

Decisiones Técnicas

- Separación de Concerns: arquitectura desacoplada para facilitar mantenimiento.
- Base de Datos Relacional: MySQL por su robustez y familiaridad.
- Despliegue en la Nube: aprovechando las fortalezas de Vercel, Render y Railway.

Cómo ejecutar el proyecto localmente:

Requisitos Previos
- Node.js v18+
- NPM
- MySQL o Railway

Clonar el Repositorio
git clone https://github.com/JrBrandonOrtiz/chatbot_app.git
cd chatbot_app

Configurar el Backend

cd backend
Crear archivo .env con:
DB_HOST=centerbeam.proxy.rlwy.net
DB_PORT=29524
DB_USER=root
DB_PASSWORD=
DB_NAME=railway
OPENAI_API_KEY=

npm install
npm run dev

Configurar el Frontend

cd ../frontend
Crear archivo .env con:
REACT_APP_API_URL=https://chatbot-backend-cznd.onrender.com
npm install
npm run dev

Rutas Disponibles
- POST /chat: Enviar un mensaje al chatbot.
- GET /messages: Obtener historial de mensajes.

Pruebas y Validación
- Endpoint /test-db para conexión MySQL
- Manejo de errores en DB y llamadas a OpenAI

Despliegue en la Nube
- Frontend: Vercel con despliegue automático vía GitHub.
- Backend: Render configurado con entorno Railway.
- DB: Railway configurado para aceptar conexiones externas.

Recursos Adicionales
- Swagger Docs: https://swagger.io/docs/
- Railway Docs: https://docs.railway.app/
- Render Docs: https://render.com/docs
- Vercel Docs: https://vercel.com/docs

Jorge Brandon Ortiz Arango 
27/05/2025

