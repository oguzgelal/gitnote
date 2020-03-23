import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from '../../config/initialState';
import rootReducer from '../rootReducer';
import IReduxState from '../../interfaces/IReduxState';

export default () => createStore<IReduxState, any, any, any>(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk))
);
