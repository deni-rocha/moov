import axios from 'axios'
import { IUseApi } from '../@types/IUseApi'
import { IUser } from '../@types/IUser'

const api = axios.create({
  baseURL: process.env.REACT_APP_API
})

export const useApi = (): IUseApi => ({
  signin: async (email: string, senha: string): Promise<IUser | null> => {
    try {
      // no objeto de retorno não existe a propriedade "senha"
      const responseApi = await api.post<IUser>('/usuario/login', {
        email,
        senha
      })

      // adiciona a propriedade senha no json
      const data = { ...responseApi.data, senha }

      // adicionando os dados no armazenamento do navegador (persiste apenas na sessão atual)
      sessionStorage.setItem('@App-User', JSON.stringify(data))
      return data
    } catch (err) {
      return null
    }
  },
  logout: () => {
    sessionStorage.removeItem('@App-User')
  }
})
