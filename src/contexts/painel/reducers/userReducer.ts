import { UserActions } from '../actions/UserActions'
import IUser from '../interfaces/IUser'

export const initialStateUser = {
  id: 0,
  nome: '',
  sexo: '',
  email: '',
  ativo: false,
  perfil: '',
  token: ''
}

function userReducer(state: IUser, action: UserActions): IUser {
  const { type, payload } = action

  switch (type) {
    case 'ADD_USER':
      return {
        ...payload
      }
    case 'REFRESH_TOKEN':
      return {
        ...state,
        token: payload
      }
    default:
      return state
  }
}

export default userReducer
