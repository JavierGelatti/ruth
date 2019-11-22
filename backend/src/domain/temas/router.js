import { Router } from 'express';
import context from '~/context';

import ReunionController from './controller';
import asyncMiddleware from '~/utils/asyncMiddleware';

const router = Router({ promise: true });

const controller = ReunionController(context);

router.get('/temas', asyncMiddleware(controller.reunion));
router.post('/temas', asyncMiddleware(controller.crear));

export default router;
