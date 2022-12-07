import { apiMoov } from '../..'
import { IUserList } from '../../../../types/IUserList'

const userList = async (token: string): Promise<IUserList | null> => {
  try {
    const responseApi = await apiMoov.get<IUserList>('/usuario/list', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const data = responseApi.data

    return data
  } catch (err) {
    console.log(err)
    return null
  }
}

export default userList
