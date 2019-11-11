import { Router } from 'express';
import context from '~/context';

import ReunionController from './controller';
import asyncMiddleware from '~/utils/asyncMiddleware';

const router = Router({ promise: true });

const controller = ReunionController(context);

router.get('/', asyncMiddleware(controller.reunion));
router.post('/', asyncMiddleware(controller.crear));

router.get('/:id/estadoActual', asyncMiddleware(controller.estadoDeReunion));
router.put('/', asyncMiddleware(controller.actualizar));

export default router;
