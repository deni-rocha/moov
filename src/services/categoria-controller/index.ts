import { AxiosError } from 'axios'
import { useApi } from '../../hooks/useApi'

const { apiInstance } = useApi()
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const createCategoria = async (
  icone: string,
  nome: string,
  permitirSuperar: boolean,
  restrito: boolean,
  valor: 0
) => {
  try {
    const res = await apiInstance.post('categoria', {
      icone,
      nome,
      permitirSuperar,
      restrito,
      valor
    })

    return res.status
  } catch (error) {
    const err = error as AxiosError
    const status = err.response?.status

    throw new Error('algo deu errado', { cause: status })
  }
}

export { createCategoria }
