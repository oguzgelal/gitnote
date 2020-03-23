import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import DevTools from '../../components/DevTools';
import initialState from '../../config/initialState';
import rootReducer from '../rootReducer';
import IReduxState from '../../interfaces/IReduxState';

export default () => {

  const enhancer = compose(
    applyMiddleware(thunk, reduxImmutableStateInvariant()),
    DevTools.instrument(), // redux devtools setup
  );

  const store = createStore<IReduxState, any, any, any>(
    rootReducer,
    initialState,
    enhancer
  );

  if (module.hot) {
    module.hot.accept('../rootReducer', () => {
      const nextReducer = require('../rootReducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
