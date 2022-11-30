export type IUserList = IUser[]

export interface IUser {
  id: number
  nome: string
  sexo: string
  email: string
  ativo: boolean
  perfil: string
  token: any
}
