import { Router } from 'express';

import models from '~/database/models';
import PruebasController from './controller';
import asyncMiddleware from '~/utils/asyncMiddleware';
import VotacionDeRoots from './votacionDeRoots';

const router = Router({ promise: true });

const controller = PruebasController({
    buscarTemasVotacionRoots: () => {
        return VotacionDeRoots.getTemasRoots()
    },
    guardarTemasVotacionRoots: () => {
        return VotacionDeRoots.getTemasRoots().then(temas => Promise.all(temas.map(crearTema)));
    },
    buscarTemasGuardados: () => {
        return models.Tema.findAll()
    }
});

router.get('/temas', asyncMiddleware(controller.temas));
router.get('/guardarTemas', asyncMiddleware(controller.guardarTemas));
router.get('/temasGuardados', asyncMiddleware(controller.devolverTemasGuardados));

export default router;

function crearTema(tema) {
    return models.Tema.create({ 
        tipo: tema.tipo,
        titulo: tema.titulo,
        descripcion: tema.descripcion,
        duracion: tema.duracion,
        autor: tema.autor,
        obligatoriedad: tema.obligatoriedad,
        linkDePresentacion: tema.linkDePresentacion,
        propuestas: tema.propuestas,
        temasParaRepasar: tema.temasParaRepasar
    });
};

