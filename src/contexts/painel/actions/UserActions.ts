import IUser from '../interfaces/IUser'

export type UserActions =
  | {
      type: 'ADD_USER'
      payload: IUser
    }
  | { type: 'REFRESH_TOKEN'; payload: string }
