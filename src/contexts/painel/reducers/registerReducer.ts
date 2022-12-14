import { RegisterActions } from '../actions/RegisterActions'
import { IRegister } from '../interfaces/IRegister'

export const initialStateRegister = {
  registerBtnActive: 'usuários'
}

function registerReducer(state: IRegister, action: RegisterActions): IRegister {
  const { type, payload } = action

  switch (type) {
    case 'REGISTER_CHANGE_BTN':
      return {
        ...state,
        registerBtnActive: payload
      }

    default:
      return state
  }
}

export default registerReducer
