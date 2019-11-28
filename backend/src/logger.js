import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
  ),
  defaultMeta: { service: 'ruth:backend' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple(),
      ),
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.File({
      dirname: 'logs', filename: 'error.log', level: 'error', options: { flags: 'w' },
    }),
  );
  logger.add(
    new transports.File({ dirname: 'logs', filename: 'combined.log' }),
  );
}

logger.stream = {
  write: (message) => {
    logger.info(message);
  },
};

logger.errorHandler = () => (err, req, res, next) => {
  const status = err.status || 500;
  logger.error(`${status} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`, { stack: err.stack });

  res.status(status);
  res.json({ error: err.message });
};

export default logger;
