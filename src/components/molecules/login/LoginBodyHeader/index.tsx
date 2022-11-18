import React from 'react'
import LoginInputText from '../LoginInputText'

const LoginBodyHeader = (): JSX.Element => {
  return (
    <label className="flex flex-col h-24">
      <p className="font-bold">E-mail de acesso</p>
      <LoginInputText type="email" placeholder="Informação" name="email" />
      <p className="self-end text-sm pt-2 cursor-pointer">
        Esqueceu a sua <strong>senha?</strong>
      </p>
    </label>
  )
}

export default LoginBodyHeader
