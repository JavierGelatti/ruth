import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import * as path from 'path';
import session from 'express-session';

import indexRouter from './routes';
import logger from '~/logger';

const app = express();

app.use(morgan('combined', { stream: logger.stream }));
app.use(json());
app.use(urlencoded({ extended: false }));
// TODO: Express sessions esta usando un memory store, deberiamos mandar en la cookie directamente el valor (a la JWT) sino cada reset de heroku invalida las sesiones anteriores.
app.use(session({ secret: 'keyboard cat' }))

app.use('/api', indexRouter);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './frontend')));
}

app.use(logger.errorHandler());

app.get('*', (req, res) => {
  logger.info(`Request not found ${req.url}`);
  res.status(404).send('Not found');
});

export default app;
