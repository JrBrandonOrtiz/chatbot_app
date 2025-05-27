import { Request, Response, NextFunction, RequestHandler } from 'express';
import { db } from '../config/db';
import { getOpenaiResponse } from '../services/openai.services';

export const getMessages: RequestHandler = async (_req, res, next) => {
  try {
    const [rows] = await db.query('SELECT * FROM messages ORDER BY timestamps ASC');
    res.json(rows); 
  } catch (error) {
    next(error); 
  }
};

export const postMessage: RequestHandler = async (req, res, next) => {
  try {
    const { content } = req.body;

    if (!content) {
      res.status(400).json({ error: 'Contenido del mensaje requerido.' });
      return; 
    }

    // Guardar mensaje del usuario
    await db.query('INSERT INTO messages (content, sender) VALUES (?, ?)', [content, 'user']);

    // Solicitar la respuesta a la IA
    const aiResponse = await getOpenaiResponse(content);
    const responseContent = aiResponse.choices[0].message.content;

    // Guardar respuesta del bot
    await db.query('INSERT INTO messages (content, sender) VALUES (?, ?)', [responseContent, 'bot']);

    res.json({
      user: content,
      bot: responseContent,
    });
  } catch (error) {
    next(error);
  }
};
