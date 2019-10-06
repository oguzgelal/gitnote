import firebase from 'firebase';

interface IFirebase {
  app: firebase.app.App;

  getConfig(): Object;
  init(): void;
}

export default IFirebase;
