const winston = require('winston');

// creo un objeto logger que me permite llevar un control de todos los logs de la aplicacion
const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    // defaultMeta: { service: 'user-service' },
    transports: [
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

module.exports = logger;