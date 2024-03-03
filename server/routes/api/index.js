import Router from 'express';
import messagesRoutes from './messages';

const router = new Router();
router.use('/messages', messagesRoutes);


export default router;
