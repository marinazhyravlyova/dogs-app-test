import fetch from 'node-fetch';
import config from '../../config';
import logger from './logger';

export const defaultOptions = {
  headers: {},
};

export default class BackendProxy {
  static get defaultOptions() {
    return defaultOptions;
  }

  static async sendRequest(method, path, body, ...options) {
    try {
      const data = await fetch(`${config.backendUrl}${path}`, {
        method,
        body: JSON.stringify(body),
        ...this.defaultOptions,
        ...options,
      });
      const { message, status } = await (data.json());

      if (status === 'error') {
        return null;
      }

      return message;
    } catch (error) {
      logger.error(error);
    }

    return null;
  }

  static get(...args) {
    return this.sendRequest('GET', ...args);
  }

  static post(...args) {
    return this.sendRequest('POST', ...args);
  }

  static put(...args) {
    return this.sendRequest('PUT', ...args);
  }

  static delete(...args) {
    return this.sendRequest('DELETE', ...args);
  }
}
