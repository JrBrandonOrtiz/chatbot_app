/**
 * @swagger
 * tags:
 *   name: Chat
 *   description: Endpoints para interactuar con el chatbot
 */

/**
 * @swagger
 * /messages:
 *   get:
 *     summary: Obtener historial de mensajes
 *     tags: [Chat]
 *     responses:
 *       200:
 *         description: Lista de mensajes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_message:
 *                     type: integer
 *                     example: 1
 *                   content:
 *                     type: string
 *                     example: "Hola, ¿cómo estás?"
 *                   sender:
 *                     type: string
 *                     enum: ["bot", "user"]
 *                     example: "user"
 *                   timestamps:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-05-27T14:35:45.000Z"
 */

/**
 * @swagger
 * /messages:
 *   post:
 *     summary: Enviar mensaje al chatbot
 *     tags: [Chat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *             properties:
 *               content:
 *                 type: string
 *                 example: "¿Cuál es el clima hoy?"
 *     responses:
 *       200:
 *         description: Respuesta del chatbot
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response:
 *                   type: string
 *                   example: "Hoy estará soleado con una temperatura de 25°C."
 */