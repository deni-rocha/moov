import { api } from '../..'
import { IApiSolicitacao } from '../../../types/InterfaceApi'

async function getSolicitation(): Promise<IApiSolicitacao[] | []> {
  try {
    const res = await api.get<IApiSolicitacao[]>('solicitacao')
    console.log('conteúdo: ', res.data)
    return res.data
  } catch (err) {
    console.log('ops!! ocorreu um erro')
    return []
  }
}

export default getSolicitation
