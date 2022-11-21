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

async function login(email: string, senha: string): Promise<ILogin> {
  const res = await apiMoov.post<ILogin>('/usuario/login', { email, senha })

  console.log(res.data)

  return res.data
}

export default login
