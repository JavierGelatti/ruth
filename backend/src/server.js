import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import indexRouter from './routes';
import logger from '~/logger';

const app = express();

app.use(morgan('combined', { stream: logger.stream }));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use(logger.errorHandler());
app.get('*', (req, res) => {
  logger.info(`Request not found ${req.url}`);
  res.status(404).send('Not found');
});

export default app;
