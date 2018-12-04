import { combineReducers } from 'redux';
import main from './main/reducer';
import details from './details/reducer';

export default combineReducers({
  main,
  details,
});
