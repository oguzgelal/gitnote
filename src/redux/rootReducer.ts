import { combineReducers } from 'redux';
import authRedux from '../models/Auth/AuthRedux.s';

export default combineReducers({
  auth: authRedux.reducer,
});
