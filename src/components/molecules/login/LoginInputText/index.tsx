import React from 'react'
import Input from '../../../atoms/Input'
import { PropsEmail } from '../LoginBodyHeader'
interface Props extends PropsEmail {
  placeholder: string
  type: string
  name: string
  children?: React.ReactNode
}

const InputLoginText = ({
  placeholder,
  email,
  setEmail,
  name
}: Props): JSX.Element => {
  function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target
    setEmail(value)
  }
  return (
    <div className="w-full relative flex">
      <Input
        value={email}
        onChange={handleInput}
        type="text"
        name={name}
        placeholder={placeholder}
        className="text-secondary placeholder:text-secondary"
      />
    </div>
  )
}

export default InputLoginText
