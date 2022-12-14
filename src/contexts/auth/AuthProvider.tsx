import React, { useState, useEffect } from 'react'
import { IUser } from '../../@types/IUser'
import { useApi } from '../../hooks/useApi'
import { alertError, alertSucess } from '../../utils/alert'
import AuthContext, { initialStateUser } from './AuthContext'

interface Props {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: Props): JSX.Element => {
  const [user, setUser] = useState<IUser>(initialStateUser)
  const [token, setToken] = useState<string>('')
  const api = useApi()

  useEffect(() => {
    const storageUser = sessionStorage.getItem('@App-User')
    const storageToken = sessionStorage.getItem('@App-Token')

    if (storageUser !== null && storageToken !== null) {
      const parsedDate: IUser = JSON.parse(storageUser)
      setUser(parsedDate)
      setToken(storageToken)
    }
  }, [])

  const signin = async (email: string, password: string): Promise<boolean> => {
    const res = await api.signin(email, password)

    if (res !== null) {
      setUser(res.userData)
      setToken(res.responseToken)
      alertSucess('conectado', '#4C4C4C', '#ffffff')

      return true
    }

    alertError('login inválido', 'white', '#4C4C4C')
    return false
  }

  const logout = (): boolean => {
    sessionStorage.removeItem('@App-User')
    sessionStorage.removeItem('@App-Token')
    setToken('')
    return true
  }

  return (
    <AuthContext.Provider value={{ user, token, setToken, signin, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
