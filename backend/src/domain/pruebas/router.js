import { Router } from 'express';
import context from '~/context';

import PruebasController from './controller';
import asyncMiddleware from '~/utils/asyncMiddleware';

const router = Router({ promise: true });

const controller = PruebasController(context);

router.get('/temas', asyncMiddleware(controller.temas));

export default router;
