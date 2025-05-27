# 🤖 Chatbot App – Prueba Técnica Fullstack (Node.js + React)

Permite a los usuarios chatear con una IA mediante una interfaz moderna de estilo chatbot.

## Tecnologías utilizadas

### Backend
- Node.js + Express
- MySQL
- TypeScript
- API externa OpenAI
- Railway (Despliegue)

### Frontend
- React + TypeScript
- Axios
- Css
- Vercel (Despliegue)

## Estructura del repositorio





## ¿Cómo ejecutar localmente?

### Requisitos

- Node.js >= 18
- MySQL
- NPM
- React.js
---

### Backend

En la terminal

cd backend
cp .env
npm install
npm run dev

El backend corre en http://localhost:4000

### Fronted 

En la terminal 

cd frontend
npm install
npm start

El frontend corre en http://localhost:3000 

### Funcionalidad
Enviar mensajes a una IA

Almacenar historial en base de datos

Mostrar interfaz tipo chatbot

### Endpoints de la API

GET /api/messages: Lista todos los mensajes

POST /api/messages: Envía un mensaje y recibe la respuesta de la IA

Ejemplo POST: 

{
  "content": "Hola, ¿cómo estás?"
}

### Enlaces públicos

Frontend (Vercel):

Backend (Railway):

### Copiar y pegar en .ENV

DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=12345678
DB_NAME=database_chatbot
PORT=4000


### JORGE BRANDON ORTIZ ARANGO
    brandonprogram4@gmail.com
    27/05/2025