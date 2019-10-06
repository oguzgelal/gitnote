import { AnyAction, Dispatch } from 'redux';
import isNil from 'lodash/isNil';

import IReduxModule from '../../interfaces/IReduxModule';
import IAuthState, { IAuthStateUser } from './interfaces/IAuthState';

import auth from './Auth.s';
import initialState from '../../config/initialState';


class AuthRedux implements IReduxModule {

  types = {
    SAVE_USER_TO_STATE: 'auth/SAVE_USER_TO_STATE',
    REMOVE_USER_FROM_STATE: 'auth/REMOVE_USER_FROM_STATE',
  }

  saveUserToState(
    { user }:
    { user: IAuthStateUser }
  ): AnyAction {
    return {
      type: this.types.SAVE_USER_TO_STATE,
      user,
    }
  }

  removeUserFromState(): AnyAction {
    return { type: this.types.REMOVE_USER_FROM_STATE }
  }

  login() {
    return (
      { email, password }:
      { email: string, password: string }
    ) => (dispatch: Dispatch) => {
      auth.auth.setPersistence(auth.authPersistence).then(() => {
        auth.auth.signInWithEmailAndPassword(email, password)
          .then(_ => {})
          .catch(() => dispatch(this.removeUserFromState()))
      }).catch(() => dispatch(this.removeUserFromState()))
    }
  }

  logout() {
    return () => (dispatch: Dispatch) => {
      auth.auth.signOut().then(() => {
        dispatch(this.removeUserFromState())
      });
    }
  }

  setAuthObserver() {
    return () => (dispatch: Dispatch) => {
      auth.auth.onAuthStateChanged((user: firebase.User) => {
        console.log('Auth state changed: ', user);
        if (!isNil(user)) {
          dispatch(
            this.saveUserToState({
              user: {
                displayName: user.displayName,
                email: user.email,
                emailVerified: user.emailVerified,
                photoUrl: user.photoURL,
                uid: user.uid,
              }
            })
          );
        } else {
          dispatch(
            this.removeUserFromState()
          );
        }
      })
    }
  }

  getDispatchableCreators() {
    return {
      login: this.login,
      logout: this.logout,
      setAuthObserver: this.setAuthObserver,
      saveUserToState: this.saveUserToState,
      removeUserFromState: this.saveUserToState,
    }
  }

  reducer(state: IAuthState = initialState.auth, action: AnyAction) {

    if (action.type === this.types.SAVE_USER_TO_STATE) {
      return { ...state, user: action.user }
    }

    if (action.type === this.types.REMOVE_USER_FROM_STATE) {
      return { ...state, user: null }
    }

    return state;
  }
}

export default new AuthRedux();
