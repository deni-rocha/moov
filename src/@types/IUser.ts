import { ILogin } from './ILogin'

export interface IUser extends ILogin {
  senha: string
}
