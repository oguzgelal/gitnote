// https://firebase.google.com/docs/reference/js/firebase.html
import * as firebase from 'firebase/app';
import 'firebase/auth';

import IFirebase from './interfaces/IFirebase';

class Firebase implements IFirebase {

  app: firebase.app.App;
  auth: firebase.auth.Auth;
  authPersistence: firebase.auth.Auth.Persistence;

  getConfig(): Object {
    return {
      // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID,
    }
  }

  init(): void {

    // initialize the app
    this.app = firebase.initializeApp(this.getConfig());

    // initialize auth
    this.auth = this.app.auth();
    this.authPersistence = this.auth.Auth.Persistence.LOCAL;

    // set api on window for easy debug
    if (process.env.NODE_ENV !== 'production') {
      window.api = this;
    }
  }
}

export default Firebase;
