import request from 'supertest'
import app from '~/server'

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .get('/api/pruebas/temas')
      .send()
    expect(res.statusCode).toEqual(200);
  })
})