import redux from 'redux';
import IDispatchableCreators from './IDispatchableCreators';

/**
 * Interface to be implemented by redux modules. A redux module is
 * a class that has a reducer, and combines the actions / thunks.
 *
 * PS: These classes are singletons, class file should default
 * export an instance of the class.
 */
interface IReduxModule {
  types: { [key: string]: string }
  reducer: redux.Reducer;
  getDispatchableCreators(): IDispatchableCreators;
}

export default IReduxModule;
