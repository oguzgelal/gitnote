import IAuth from './interfaces/IAuth';
import IFirebase from '../Firebase/interfaces/IFirebase';

class Auth implements IAuth {

  auth: firebase.auth.Auth;
  authPersistence: firebase.auth.Auth.Persistence;

  init(firebase: IFirebase) {

    // initialize auth
    this.auth = firebase.app.auth();
    this.authPersistence = 'LOCAL';

    // set api on window for easy debug
    if (process.env.NODE_ENV !== 'production') {
      (<any>window).api = this;
    }
  }
}

export default new Auth();
