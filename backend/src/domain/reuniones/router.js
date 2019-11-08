import { Router } from 'express';
import context from '~/context';

import ReunionController from './controller';
import asyncMiddleware from '~/utils/asyncMiddleware';

const router = Router({ promise: true });

const controller = ReunionController(context);

router.get('/', asyncMiddleware(controller.reunion));
router.get('/temas', asyncMiddleware(controller.temas));
router.get('/abierta', asyncMiddleware(controller.estadoDeReunion));
router.post('/', asyncMiddleware(controller.crear));
router.put('/', asyncMiddleware(controller.actualizar));

export default router;
