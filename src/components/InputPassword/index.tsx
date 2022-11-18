import Input from '../Input'
import icon from '../../assets/input/icon/icon.svg'
import React, { useState } from 'react'

const InputPassword = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Input
      type={showPassword ? 'text' : 'password'}
      name="password"
      placeholder="****************"
    >
      <div
        className="
          absolute right-0 cursor-pointer 
          items-center justify-end h-9 flex 
          w-10"
        onClick={() => setShowPassword(!showPassword)}
      >
        <img src={icon} alt="icon" className="mr-2" />
      </div>
    </Input>
  )
}

export default InputPassword
