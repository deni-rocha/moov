import React, { useState } from 'react'
import Input from '../../../atoms/Input'
import icon from '../../../../assets/input/icon/icon.svg'

interface Props {
  placeholder: string
  name: string
}

const InputLoginPassword = ({ placeholder, name }: Props): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="w-full relative flex">
      <Input
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
