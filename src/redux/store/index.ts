import configureStoreProd from './configureStore.prod';

let configureStore = configureStoreProd;
if (process.env.NODE_ENV !== 'production') {
  configureStore = require('./configureStore.dev');
}

export default configureStore();
