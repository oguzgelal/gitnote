import { Store } from 'redux';

declare module "configureStore" {
  function configureStore(): Store
  export = configureStore;
}
