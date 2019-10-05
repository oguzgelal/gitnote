import isNil from 'lodash/isNil';
import firebase from '../../../classes/Firebase/instance';
import * as types from './types';

interface SaveUserToState {
  type: typeof types.SAVE_USER_TO_STATE,
}

export const saveUserToState = ({ user }) => ({
  type: types.SAVE_USER_TO_STATE,
  user
});

export const removeUserFromState = () => ({
  type: types.REMOVE_USER_FROM_STATE
});

// thunks

export const login = ({ email, password }) => (dispatch: void) => {
  firebase.auth.setPersistence(firebase.authPersistence).then(() => {
    firebase.auth.signInWithEmailAndPassword(email, password)
      .then(res => {})
      .catch(() => dispatch(removeUserFromState()))
  }).catch(() => dispatch(removeUserFromState()))
}

export const logout = () => dispatch => {
  firebase.auth.signOut().then(() => {
    dispatch(removeUserFromState())
  });
}

export const setAuthObserver = () => dispatch => {
  firebase.auth.onAuthStateChanged((user: firebase.User) => {
    console.log('Auth state changed: ', user);
    if (!isNil(user)) {
      dispatch(saveUserToState({
        user: {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoUrl: user.photoUrl,
          uid: user.uid,
        }
      }));
    } else {
      dispatch(removeUserFromState());
    }
  })
}
