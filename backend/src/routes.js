import { Router } from 'express';
import reunionRouter from '~/domain/reuniones/router';
import temasRouter from '~/domain/temas/router';
import perfilRouter from '~/domain/perfil/router';
import pruebasRouter from '~/domain/pruebas/router';
import loginRouter from '~/domain/login/router';
import estaLogueado from '~/domain/login/estaLogueado';

const router = Router({ promise: true });

router.use('/auth', loginRouter);
router.use('*', (req,res,next) => {
  if (estaLogueado(req)){
    next()
  } else {
    res.status(403).send("No estas logueado")
  }
})

/* GET home page. */
router.get('/', (req, res) => {
  res.status(200).send(new Date().toISOString());
});

router.use('/', reunionRouter);
router.use('/temas', temasRouter);
router.use('/perfil', perfilRouter);

if (process.env.NODE_ENV !== 'production') {
  router.use('/pruebas', pruebasRouter);
}

export default router;
