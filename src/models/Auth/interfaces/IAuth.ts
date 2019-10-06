import firebase from 'firebase';
import IFirebase from '../../Firebase/interfaces/IFirebase';

interface IAuth {
  auth: firebase.auth.Auth;
  authPersistence: firebase.auth.Auth.Persistence;

  init(firebase: IFirebase): void;
}

export default IAuth;
