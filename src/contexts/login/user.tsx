import React, { createContext, useState } from 'react'
import { ILogin } from '../../services/api/login'

interface Props {
  children: React.ReactNode
}
interface IUserContext extends ILogin {}

const LoaderContext = createContext<IUserContext>({
  id: 0,
  nome: '',
  sexo: '',
  email: '',
  ativo: false,
  perfil: '',
  token: ''
})

export const LoaderProvider = ({ children }: Props): JSX.Element => {
  const [loading, setLoading] = useState(false)

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  )
}

export default LoaderContext
