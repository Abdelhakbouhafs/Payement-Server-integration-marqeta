/**
 * Configurations of logger.
 */
const winston = require('winston');
const winstonRotator = require('winston-daily-rotate-file');

const consoleConfig = [
    new winston.transports.Console({
        'colorize': true
    })
];

const createLogger = new winston.Logger({
    'transports': consoleConfig
});

const Logger = createLogger;
Logger.add(winstonRotator, {
    'name': 'file',
    'level': 'info',
    'filename': './logs/info.log',
    'json': true,
    'datePattern': 'yyyy-MM-dd-',
    'prepend': false
});

module.exports = {
    'log': Logger
};
