export const defaultConfig = {
  backendUrl: 'https://dog.ceo/api/',
  loggerLevel: 'DEBUG',
};

export const optionsFromProcess = {};

export default {
  ...defaultConfig,
  ...optionsFromProcess,
};
