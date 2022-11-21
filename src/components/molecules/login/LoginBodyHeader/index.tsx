import React from 'react'
import LoginInputText from '../LoginInputText'

export interface PropsEmail {
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
}

const LoginBodyHeader = ({ email, setEmail }: PropsEmail): JSX.Element => {
  return (
    <label className="flex flex-col h-24">
      <p className="font-bold">E-mail de acesso</p>
      <LoginInputText
        email={email}
        setEmail={setEmail}
        type="email"
        placeholder="Informação"
        name="email"
      />
      <p className="self-end text-sm pt-2 cursor-pointer">
        Esqueceu a sua <strong>senha?</strong>
      </p>
    </label>
  )
}

export default LoginBodyHeader
