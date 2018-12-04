import config from '../../config';

export const LOG_LEVEL = {
  TRACE: 'TRACE',
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
};

export const LOG_LEVEL_MAP = {
  [LOG_LEVEL.TRACE]: 0,
  [LOG_LEVEL.DEBUG]: 1,
  [LOG_LEVEL.INFO]: 2,
  [LOG_LEVEL.WARN]: 3,
  [LOG_LEVEL.ERROR]: 3,
};

export default class Logger {
  static log(type, ...args) {
    if (LOG_LEVEL_MAP[type] <= LOG_LEVEL_MAP[config.loggerLevel]) {
      // eslint-disable-next-line no-console
      console.log(...args);
    }
  }

  static trace(...args) {
    this.log('TRACE', ...args);
  }

  static debug(...args) {
    this.log('DEBUG', ...args);
  }

  static info(...args) {
    this.log('INFO', ...args);
  }

  static warn(...args) {
    this.log('WARN', ...args);
  }

  static error(...args) {
    this.log('ERROR', ...args);
  }
}
