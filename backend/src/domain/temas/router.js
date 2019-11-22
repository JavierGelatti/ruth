import { Router } from 'express';
import context from '~/context';

import TemaController from './controller';
import asyncMiddleware from '~/utils/asyncMiddleware';

const router = Router({ promise: true });

const controller = TemaController(context);

router.get('/obtener', asyncMiddleware(controller.obtener));
router.get('/guardar', asyncMiddleware(controller.guardar));

export default router;
