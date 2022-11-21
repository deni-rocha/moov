import { api } from '../..'
import { IApiAndamento } from '../../../types/InterfaceApi'

async function getHappening(): Promise<IApiAndamento[] | []> {
  try {
    const res = await api.get<IApiAndamento[]>('andamento')
    console.log('conteúdo: ', res.data)
    return res.data
  } catch (err) {
    console.log('ops!! ocorreu um erro')
    return []
  }
}

export default getHappening
