import { Router } from 'express';
import context from '~/context';

import ReunionController from './controller';
import asyncMiddleware from '~/utils/asyncMiddleware';

const router = Router({ promise: true });

const controller = ReunionController(context);

router.get('/', asyncMiddleware(controller.reuniones));
router.post('/', asyncMiddleware(controller.crear));
router.put('/:reunionId', asyncMiddleware(controller.actualizar));

export default router;
