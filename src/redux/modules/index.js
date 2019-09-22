import { combineReducers } from 'redux';
import auth from './auth';
import requests from './requests';

export default combineReducers({
  auth,
  requests,
});
