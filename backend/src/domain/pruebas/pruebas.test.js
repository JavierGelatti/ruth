import request from 'supertest'
// import app from '~/server'
import "core-js/stable";
import "regenerator-runtime/runtime";

describe('Post Endpoints', () => {
  xit('should create a new post', async () => {
    const res = await request(app)
      .get('/api/pruebas/temas')
      .send()
    expect(res.statusCode).toEqual(200);
  })
})