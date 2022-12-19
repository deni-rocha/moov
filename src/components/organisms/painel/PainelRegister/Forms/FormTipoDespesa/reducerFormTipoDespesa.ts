const initialState = {
  despesa: '',
  valor: '0',
  arquivo: ''
}

interface IState {
  despesa: string
  valor: string
  arquivo: string
}

type Action =
  | { type: 'despesa'; payload: string }
  | { type: 'valor'; payload: string }
  | { type: 'arquivo'; payload: string }

function reducerFormTipoDespesa(state: IState, action: Action): IState {
  const { type, payload } = action
  switch (type) {
    case 'despesa':
      return {
        ...state,
        despesa: payload
      }
    case 'valor':
      return {
        ...state,
        valor: payload
      }
    case 'arquivo':
      return {
        ...state,
        arquivo: payload
      }
    default:
      return state
  }
}

export { initialState, reducerFormTipoDespesa }
