// https://firebase.google.com/docs/reference/js/firebase.html
import firebase from 'firebase';

import IFirebase from './interfaces/IFirebase';

class Firebase implements IFirebase {

  app: firebase.app.App;

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
    this.app = firebase.initializeApp(
      this.getConfig()
    );

  }
}

export default new Firebase();
