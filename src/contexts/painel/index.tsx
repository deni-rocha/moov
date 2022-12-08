import React, { createContext, useEffect, useReducer } from 'react'
import { CurrentPageActions } from './actions/CurrentPageActions'
import { RegisterActions } from './actions/RegisterActions'
import { UserActions } from './actions/UserActions'
import { ICurrentPage } from './interfaces/currentPage'
import { IRegister } from './interfaces/IRegister'
import IUser from './interfaces/IUser'
import currentPageReducer, {
  initialStateCurrentPage
} from './reducers/currentPageReducer'
import registerReducer, {
  initialStateRegister
} from './reducers/registerReducer'
import userReducer, { initialStateUser } from './reducers/userReducer'

interface initialStateType {
  user: IUser
  register: IRegister
  currentPage: ICurrentPage
}

const initialState = {
  user: initialStateUser,
  register: initialStateRegister,
  currentPage: initialStateCurrentPage
}

const rootReducer = (
  { user, register, currentPage }: initialStateType,
  action: UserActions | RegisterActions | CurrentPageActions
): initialStateType => ({
  user: userReducer(user, action as UserActions),
  register: registerReducer(register, action as RegisterActions),
  currentPage: currentPageReducer(currentPage, action as CurrentPageActions)
})

const PainelContext = createContext<{
  state: initialStateType
  dispatch: React.Dispatch<UserActions | RegisterActions | CurrentPageActions>
}>({ state: initialState as unknown as initialStateType, dispatch: () => null })

export const PainelProvider = (props: {
  children?: React.ReactNode
}): JSX.Element => {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  useEffect(() => {
    const dataStorage = sessionStorage.getItem('@App-login')

    if (dataStorage !== null) {
      const parsed: IUser = JSON.parse(dataStorage)
      dispatch({ type: 'ADD_USER', payload: parsed })
    }
  }, [])

  return (
    <PainelContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PainelContext.Provider>
  )
}

export default PainelContext
