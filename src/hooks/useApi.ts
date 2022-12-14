import axios, { AxiosResponse } from 'axios'
import { useContext } from 'react'
import { ILogin } from '../@types/ILogin'
import AuthContext from '../contexts/auth/AuthContext'
import { IUserList } from '../types/IUserList'

const api = axios.create({
  baseURL: process.env.REACT_APP_API
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useApi = () => {
  const { user, token, setToken } = useContext(AuthContext)
  const { email, senha } = user

  const verifyLogin = async (
    emailLogin: string,
    senhaLogin: string
  ): Promise<AxiosResponse<ILogin, any> | null> => {
    try {
      const response = await api.post<ILogin>('/usuario/login', {
        email: emailLogin,
        senha: senhaLogin
      })

      return response
    } catch (err) {
      return null
    }
  }
  const refreshToken = (): void => {
    const refresh = async (): Promise<void> => {
      const res = await verifyLogin(email, senha)
      const newToken = res?.data.token

      if (newToken !== undefined) {
        sessionStorage.setItem('@App-Token', newToken)
        setToken(newToken)
      }
    }

    void refresh()
  }

  return {
    signin: async (emailLogin: string, senhaLogin: string) => {
      const responseApi = await verifyLogin(emailLogin, senhaLogin)

      if (responseApi !== null) {
        const responseToken = responseApi.data.token
        // deixa um session separado para o Token
        sessionStorage.setItem('@App-Token', responseToken)

        // adiciona a propriedade senha no json e deixa o token vazio
        // para o session de User nao ter acesso ao token
        const userData = { ...responseApi.data, senha: senhaLogin, token: '' }
        sessionStorage.setItem('@App-User', JSON.stringify(userData))

        return { userData, responseToken }
      }

      return null
    },
    getAllUsers: async () => {
      try {
        const reponse = await api.get<IUserList>('/usuario/list', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        return reponse.data
      } catch (error) {
        console.log('deu ruim expirou o bagulho')
        refreshToken()
        return null
      }
    }
  }
}
