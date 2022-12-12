import React, { useState, useEffect } from 'react'
import { IUser } from '../../@types/IUser'
import { useApi } from '../../hooks/useApi'
import AuthContext, { initialStateUser } from './AuthContext'

interface Props {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: Props): JSX.Element => {
  const [user, setUser] = useState<IUser>(initialStateUser)
  const [signed, setSigned] = useState<boolean>(false)
  const api = useApi()

  useEffect(() => {
    const storageData = sessionStorage.getItem('@App-User')

    if (storageData !== null) {
      const parsedDate: IUser = JSON.parse(storageData)
      setUser(parsedDate)
      setSigned(true)
    }
  }, [])

  const signin = async (email: string, password: string): Promise<boolean> => {
    const data = await api.signin(email, password)
    if (data !== null) {
      setUser(data)
      return true
    }
    return false
  }

  const logout = (): boolean => {
    console.log('logout está sendo executada.')
    api.logout()
    return true
  }

  return (
    <AuthContext.Provider value={{ user, signed, setSigned, signin, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
