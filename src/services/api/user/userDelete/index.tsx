import { apiMoov } from '../..'

const userDelete = async (id: number): Promise<boolean | null> => {
  try {
    const responseApi = await apiMoov.delete(`/usuario/${id}`)
    if (responseApi.status === 200) return true

    return null
  } catch (err) {
    console.log(err)
    return false
  }
}

export default userDelete
