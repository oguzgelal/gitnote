import redux from 'redux';
import * as thunk from 'redux-thunk';

/**
 * Any function that returns something that is dispatchable by the
 * redux store. This includes action creators and redux thunks.
 */
export type DispatchableCreator = (
  redux.ActionCreator<redux.AnyAction> |
  thunk.ThunkAction<any, any, any, any>
);


/**
 * Object thats values are dispatchable creators. It should be
 * consumable by `bindActionCreators` of react-redux's `connect`.
 */
interface IDispatchableCreators {
  [key: string]: DispatchableCreator;
}

export default IDispatchableCreators;
