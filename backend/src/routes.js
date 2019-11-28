import { Router } from 'express';
import reunionRouter from '~/domain/reuniones/router';
import temasRouter from '~/domain/temas/router';
import pruebasRouter from '~/domain/pruebas/router';

const router = Router({ promise: true });

/* GET home page. */
router.get('/', (req, res) => {
  res.status(200).send(new Date().toISOString());
});

router.use('/', reunionRouter);
router.use('/temas', temasRouter);

if (process.env.NODE_ENV !== 'production') {
  router.use('/pruebas', pruebasRouter);
}

export default router;
