import supertest from 'supertest';
import app from '../src/app';

const request = supertest(app);

describe('API tests', () => {
  it('should respond with a message when POST to /api/test', async () => {
    const response = await request
      .post('/api/test')
      .set('Content-Type', 'application/json')
      .set('XSRF-TOKEN', 'Z0c3G8r2-UNo78uX3dwAYlOwzSFIUJvxTMLo') // replace with actual token
      .send({ hello: 'world' });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Your expected message');
  });
});
