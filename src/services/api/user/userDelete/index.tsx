import { AxiosError } from 'axios'
import { apiMoov } from '../..'

const userDelete = async (
  id: number,
  token: string
): Promise<number | null> => {
  try {
    const responseApi = await apiMoov.delete(`/usuario/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return responseApi.status
  } catch (error) {
    const err = error as AxiosError
    const status = err.response?.status

    return status ?? null
  }
}

export default userDelete
