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
  user: IUser
  signin: (email: string, password: string) => Promise<boolean>
  logout: () => boolean
  token: string
  setToken: React.Dispatch<React.SetStateAction<string>>
}

const AuthContext = createContext<IAuthContext>({
  user: initialStateUser,
  signin: async () => false,
  logout: () => false,
  token: '',
  setToken: () => {}
})

export default AuthContext
