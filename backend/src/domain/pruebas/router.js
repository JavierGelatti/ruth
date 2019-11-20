import { Router } from 'express';
import context from '~/context';
import PruebasController from './controller';
import asyncMiddleware from '~/utils/asyncMiddleware';
import VotacionDeRoots from './votacionDeRoots';

const router = Router({ promise: true });

const repo = context.temasRepo;

const controller = PruebasController({
    buscarTemasVotacionRoots: () => {
        return VotacionDeRoots.getTemasRoots()
    },
    guardarTemasVotacionRoots: () => {
        return VotacionDeRoots.getTemasRoots().then(temas => 
            Promise.all(temas.map(tema => repo.create(tema))));
    },
    buscarTemasGuardados: () => {
        return repo.findAll();
    }
});

router.get('/temas', asyncMiddleware(controller.temas));
router.get('/guardarTemas', asyncMiddleware(controller.guardarTemas));
router.get('/temasGuardados', asyncMiddleware(controller.devolverTemasGuardados));

export default router;

