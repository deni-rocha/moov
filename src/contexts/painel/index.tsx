import React, { createContext, useReducer } from 'react'
import { CurrentPageActions } from './actions/CurrentPageActions'
import { RegisterActions } from './actions/RegisterActions'
import { ICurrentPage } from './interfaces/currentPage'
import { IRegister } from './interfaces/IRegister'
import currentPageReducer, {
  initialStateCurrentPage
} from './reducers/currentPageReducer'
import registerReducer, {
  initialStateRegister
} from './reducers/registerReducer'

interface initialStateType {
  register: IRegister
  currentPage: ICurrentPage
}

const initialState = {
  register: initialStateRegister,
  currentPage: initialStateCurrentPage
}

const rootReducer = (
  { register, currentPage }: initialStateType,
  action: RegisterActions | CurrentPageActions
): initialStateType => ({
  register: registerReducer(register, action as RegisterActions),
  currentPage: currentPageReducer(currentPage, action as CurrentPageActions)
})

const PainelContext = createContext<{
  state: initialStateType
  dispatch: React.Dispatch<RegisterActions | CurrentPageActions>
}>({ state: initialState as unknown as initialStateType, dispatch: () => null })

export const PainelProvider = (props: {
  children?: React.ReactNode
}): JSX.Element => {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  return (
    <PainelContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PainelContext.Provider>
  )
}

export default PainelContext
