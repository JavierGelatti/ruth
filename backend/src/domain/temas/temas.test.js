import request from 'supertest';
import app from '~/server';
import models from '~/database/models';

describe('Post Endpoints', () => {
  it('cuando no se envia inicio o fin debería responder con error sin realizar cambios', () => {
    return models.Tema.create({titulo:"hola", inicio:null, fin:null})
    .then((tema) => 
        request(app)
        .put('api/temas/temaActual', {id:tema.id})
        .send()
        .then((res) => {
            expect(res.statusCode).toEqual(500)
            expect(tema.toEqual({titulo:"hola", inicio:null, fin:null}))
            done();
        }))
  });
});