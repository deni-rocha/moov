interface IState {
  currentNome: string
  currentEmail: string
  currentSexo: string
  currentPerfil: string
  currentId: number
}

type Action =
  | { type: 'nome'; payload: string }
  | { type: 'email'; payload: string }
  | { type: 'sexo'; payload: string }
  | { type: 'perfil'; payload: string }
  | { type: 'id'; payload: number }

export const reducerUserEdit = (state: IState, action: Action): IState => {
  const { type, payload } = action

  switch (type) {
    case 'nome':
      return {
        ...state,
        currentNome: payload
      }
    case 'email':
      return {
        ...state,
        currentEmail: payload
      }
    case 'sexo':
      return {
        ...state,
        currentSexo: payload
      }
    case 'perfil':
      return {
        ...state,
        currentPerfil: payload
      }

    case 'id':
      return {
        ...state,
        currentId: payload
      }

    default:
      return state
  }
}
