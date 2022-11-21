import React, { useState } from 'react'
import Input from '../../../atoms/Input'
import icon from '../../../../assets/input/icon/icon.svg'
import { PropsSenha } from '../LoginBodyMain'

interface Props extends PropsSenha {
  placeholder: string
  name: string
}

const InputLoginPassword = ({
  placeholder,
  name,
  senha,
  setSenha
}: Props): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false)

  function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target
    setSenha(value)
  }
  return (
    <div className="w-full relative flex">
      <Input
        value={senha}
        onChange={(e) => handleInput(e)}
        className="text-secondary placeholder:text-secondary"
        type={showPassword ? 'text' : 'password'}
        name={name}
        placeholder={placeholder}
      />
      <div
        className="
          absolute right-0 cursor-pointer 
          items-center justify-end h-9 flex 
          w-10"
        onClick={() => setShowPassword(!showPassword)}
      >
        <img src={icon} alt="icon" className="mr-2" />
      </div>
    </div>
  )
}

export default InputLoginPassword
