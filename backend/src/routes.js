import { Router } from 'express';
import reunionRouter from '~/domain/reuniones/router';
import temasRouter from '~/domain/temas/router';
import pruebasRouter from '~/domain/pruebas/router';
import logger from '~/logger';

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

router.use(logger.errorHandler());

router.get('*', (req, res) => {
  logger.info(`Request not found ${req.url}`);
  res.status(404).send('Not found');
});

export default router;
