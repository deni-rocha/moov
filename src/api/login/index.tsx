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

async function login(email: string, senha: string): Promise<ILogin | null> {
  try {
    const res = await apiMoov.post<ILogin>('/usuario/login', { email, senha })
    return res.data
  } catch (err) {
    return null
  }
}

export default login
