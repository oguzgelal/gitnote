export interface IAuthStateUser {
  displayName: string,
  email: string,
  emailVerified: boolean,
  photoUrl: string,
  uid: string,
}

interface IAuthState {
  user: IAuthStateUser
}

export default IAuthState;
