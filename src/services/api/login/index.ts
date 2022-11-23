import { apiMoov } from '..'

export interface ILogin {
  id: number
  nome: string
  sexo: string
  email: string
  ativo: boolean
  perfil: string
  token: string
}

const login = async (email: string, senha: string): Promise<ILogin | null> => {
  try {
    const responseApi = await apiMoov.post<ILogin>('/usuario/login', {
      email,
      senha
    })

    const data = responseApi.data

    // adicionando os dados no armazenamento do navegador (persiste apenas na sessão atual)
    sessionStorage.setItem('@App-login', JSON.stringify(data))
    return data
  } catch (err) {
    return null
  }
}

export default login
