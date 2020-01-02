import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import * as path from 'path';

import indexRouter from './routes';
import webSocketRouter from './webSocket';
import logger from '~/logger';

const app = express();
const expressWs = require('express-ws')(app);


app.use(morgan('combined', { stream: logger.stream }));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.ws('/ws', webSocketRouter(expressWs.getWss()));
app.use('/api', indexRouter);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './frontend')));
  app.use('*', (req, res) => {
    res.sendfile(`${__dirname}/frontend/index.html`);
  });
}

export default app;
