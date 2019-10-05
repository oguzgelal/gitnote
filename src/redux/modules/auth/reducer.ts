import { Auth } from './types';
import initialState from '../../../config/initialState';
import * as types from './types';

export default (state: Auth = initialState.auth, action = {}) => {

  if (action.type === types.SAVE_USER_TO_STATE) {
    return {
      ...state,
      user: action.user
    }
  }

  if (action.type === types.REMOVE_USER_FROM_STATE) {
    return {
      ...state.auth,
      user: null
    }
  }

  return state;
}
