import { AxiosError } from 'axios'
import { apiMoov } from '../..'
import { IUserList } from '../../../../types/IUserList'

const userList = async (token: string): Promise<IUserList | number> => {
  try {
    const responseApi = await apiMoov.get<IUserList>('/usuario/list', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const data = responseApi.data

    return data
  } catch (error) {
    const err = error as AxiosError
    const status = err.response?.status

    return status ?? 777
  }
}

export default userList
