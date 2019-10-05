import * as firebase from 'firebase';

interface IFirebase {
  app: firebase.app.App;
  auth: firebase.auth.Auth;
  authPersistence: firebase.auth.Auth.Persistence;

  getConfig(): Object;
  init(): void;
}

export default IFirebase;
