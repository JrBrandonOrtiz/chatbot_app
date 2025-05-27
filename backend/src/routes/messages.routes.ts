import { Router } from 'express';
import { getMessages, postMessage } from '../controllers/messages.controller';

const router = Router();

router.get('/messages', getMessages);
router.post('/messages', postMessage);

export default router;
