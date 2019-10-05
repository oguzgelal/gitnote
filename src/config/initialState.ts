import { Auth } from '../redux/modules/auth/types';

export interface IInitialState {
  auth: Auth;
}

const initialState: IInitialState = {
  auth: {}
}

export default initialState;
