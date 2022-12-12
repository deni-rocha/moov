import { IUser } from './IUser'

export interface IUseApi {
  signin: (email: string, senha: string) => Promise<IUser | null>
  logout: () => void
}
