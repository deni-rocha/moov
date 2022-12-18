const initialState = {
  nome: '',
  email: '',
  senha: '',
  sexo: 'MASCULINO',
  perfil: 'NORMAL'
}

interface IState {
  nome: string
  email: string
  senha: string
  sexo: string
  perfil: string
}

type Action =
  | { type: 'nome'; payload: string }
  | { type: 'email'; payload: string }
  | { type: 'senha'; payload: string }
  | { type: 'sexo'; payload: string }
  | { type: 'perfil'; payload: string }
  | { type: 'reset' }

function reducerForm(state: IState, action: Action): IState {
  switch (action.type) {
    case 'nome':
      return {
        ...state,
        nome: action.payload
      }
    case 'email':
      return {
        ...state,
        email: action.payload
      }
    case 'senha':
      return {
        ...state,
        senha: action.payload
      }
    case 'sexo':
      return {
        ...state,
        sexo: action.payload
      }
    case 'perfil':
      return {
        ...state,
        perfil: action.payload
      }
    case 'reset':
      return initialState
    default:
      return state
  }
}

export { initialState, reducerForm }
