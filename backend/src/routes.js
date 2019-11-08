import { Router } from 'express';
import reunionRouter from '~/domain/reuniones/router';

const router = Router({ promise: true });

/* GET home page. */
router.get('/', (req, res) => {
  res.status(200).send(new Date().toISOString());
});

router.use('/reunion', reunionRouter);

export default router;
