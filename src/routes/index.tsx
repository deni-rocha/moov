import React, { useContext } from 'react'
import AuthContext from '../contexts/auth'
import OtherRoutes from './OtherRoutes'
import SignRoute from './SignRoute'

const Rotas = (): JSX.Element => {
  const { signed } = useContext(AuthContext)

  return signed ? <OtherRoutes /> : <SignRoute />
}
export default Rotas
