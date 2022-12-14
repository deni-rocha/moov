import React, { useContext } from 'react'
import AuthContext from '../contexts/auth/AuthContext'
import OtherRoutes from './OtherRoutes'
import SignRoute from './SignRoute'

const Rotas = (): JSX.Element => {
  const { token } = useContext(AuthContext)
  const existToken = token.length === 0

  return (
    <>
      {existToken && <SignRoute />}
      {!existToken && <OtherRoutes />}
    </>
  )
}
export default Rotas
