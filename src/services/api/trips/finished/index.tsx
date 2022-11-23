import { apiMock } from '../..'
import { IApiFinalizada } from '../../../../types/InterfaceApi'

async function getFinished(): Promise<IApiFinalizada[] | []> {
  try {
    const res = await apiMock.get<IApiFinalizada[]>('finalizadas')
    console.log('conteúdo: ', res.data)
    return res.data
  } catch (err) {
    console.log('ops!! ocorreu um erro')
    return []
  }
}

export default getFinished
