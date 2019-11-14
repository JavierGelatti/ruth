import { Router } from 'express';
import context from '~/context';
import { Tema } from '~/domain/temas/tema'

import PruebasController from './controller';
import asyncMiddleware from '~/utils/asyncMiddleware';
import VotacionDeRoots from './votacionDeRoots';

const router = Router({ promise: true });

const controller = PruebasController({
    buscarTemasVotacionRoots: () => {
        return VotacionDeRoots.getTemasRoots()
        .then(temas => temas.map(tema => new Tema(tema)));
    }
});

router.get('/temas', asyncMiddleware(controller.temas));

export default router;
