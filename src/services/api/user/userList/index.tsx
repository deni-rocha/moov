import { apiMoov } from '../..'
import { IUserList } from '../../../../types/IUserList'

const userList = async (): Promise<IUserList | null> => {
  try {
    const responseApi = await apiMoov.get<IUserList>('/usuario/list')

    const data = responseApi.data

    return data
  } catch (err) {
    console.log(err)
    return null
  }
}

export default userList
