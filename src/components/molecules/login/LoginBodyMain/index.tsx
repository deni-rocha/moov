import React, { useState } from 'react'
import icon from '../../../../assets/input/icon/icon.svg'
import Input from '../../../atoms/Input'

export interface PropsSenha {
  senha: string
  setSenha: React.Dispatch<React.SetStateAction<string>>
}

const LoginBodyMain = ({ senha, setSenha }: PropsSenha): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target
    setSenha(value)
  }

  return (
    <>
      <label className="flex flex-col mb-8">
        <p className="font-bold">Senha de acesso</p>
        <div className="w-full relative flex">
          <Input
            value={senha}
            onChange={handleChange}
            className="text-secondary placeholder:text-secondary"
            type={showPassword ? 'text' : 'password'}
            placeholder={'****************'}
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
      </label>
    </>
  )
}

export default LoginBodyMain
