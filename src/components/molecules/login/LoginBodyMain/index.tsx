import React from 'react'
import LoginInputPassword from '../LoginInputPassword'

const LoginBodyMain = (): JSX.Element => {
  return (
    <>
      <label className="flex flex-col mb-8">
        <p className="font-bold">Senha de acesso</p>
        <LoginInputPassword name="password" placeholder="****************" />
      </label>
    </>
  )
}

export default LoginBodyMain
