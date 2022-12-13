import React, { useContext } from 'react'
import AuthContext from '../contexts/auth/AuthContext'
import OtherRoutes from './OtherRoutes'
import SignRoute from './SignRoute'

const Rotas = (): JSX.Element => {
  const { token } = useContext(AuthContext)

  return token !== null ? <OtherRoutes /> : <SignRoute />
}
export default Rotas
