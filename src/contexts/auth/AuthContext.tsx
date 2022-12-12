import { createContext } from 'react'
import { IUser } from '../../@types/IUser'

export const initialStateUser = {
  ativo: false,
  email: '',
  id: 0,
  nome: '',
  perfil: '',
  senha: '',
  sexo: '',
  token: ''
}
interface IAuthContext {
  signed: boolean
  setSigned: React.Dispatch<React.SetStateAction<boolean>>
  user: IUser
  signin: (email: string, password: string) => Promise<boolean>
  logout: () => boolean
}

const AuthContext = createContext<IAuthContext>({
  signed: false,
  setSigned: () => {},
  user: initialStateUser,
  signin: async function () {
    return false
  },
  logout: function () {
    return false
  }
})

export default AuthContext
