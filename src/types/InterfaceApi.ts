export interface IApi {
  solicitacao: IApiSolicitacao[]
  andamento: IApiAndamento[]
  finalizadas: IApiFinalizada[]
}

export interface IApiSolicitacao {
  nome: string
  email: string
  setor: string
  funcao: string
  data: string
}

export interface IApiAndamento {
  titulo: string
  descricao: string
  remetente: string
  funcao: string
  data: string
  tipo: string
}

export interface IApiFinalizada {
  titulo: string
  descricao: string
  remetente: string
  funcao: string
  data: string
  tipo: string
}
