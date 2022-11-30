import React, { createContext, useEffect, useState } from 'react'
import { ILogin } from '../../services/api/login'

interface Props {
  children: React.ReactNode
}

const initialValue = {
  id: 0,
  nome: '',
  sexo: '',
  email: '',
  ativo: false,
  perfil: '',
  token: ''
}
const UserContext = createContext<ILogin>(initialValue)

export const UserProvider = ({ children }: Props): JSX.Element => {
  const [data, setData] = useState(initialValue)

  useEffect(() => {
    const dataStorage = sessionStorage.getItem('@App-login')

    if (dataStorage !== null) {
      const parsed = JSON.parse(dataStorage)
      setData(parsed)
    }
  }, [])

  return (
    <UserContext.Provider value={{ ...data }}>{children}</UserContext.Provider>
  )
}

export default UserContext
