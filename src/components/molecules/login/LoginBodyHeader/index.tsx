import React from 'react'
import Input from '../../../atoms/Input'

export interface PropsEmail {
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
}

const LoginBodyHeader = ({ email, setEmail }: PropsEmail): JSX.Element => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target
    setEmail(value)
  }
  return (
    <label className="flex flex-col h-24">
      <p className="font-bold">E-mail de acesso</p>
      <div className="w-full relative flex">
        <Input
          value={email}
          onChange={handleChange}
          type="email"
          placeholder={'Informação'}
          className="text-secondary placeholder:text-secondary"
        />
      </div>
      <p className="self-end text-sm pt-2 cursor-pointer">
        Esqueceu a sua <strong>senha?</strong>
      </p>
    </label>
  )
}

export default LoginBodyHeader
