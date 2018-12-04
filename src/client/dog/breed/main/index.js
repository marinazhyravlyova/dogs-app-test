import { moduleName as parentModuleName } from '../index';

export const moduleName = `${parentModuleName}_BREED`;
export * from './actions';
export * from './actionTypes';
export { default as component } from './component';
export { default as container } from './container';
