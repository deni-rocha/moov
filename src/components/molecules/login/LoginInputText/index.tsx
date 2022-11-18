import React from 'react'
import LoginInput from '../../../atoms/login/LoginInput'
interface Props {
  placeholder: string
  type: string
  name: string
  children?: React.ReactNode
}

const InputLoginText = ({ placeholder, name }: Props): JSX.Element => {
  return (
    <div className="w-full relative flex">
      <LoginInput type="text" name={name} placeholder={placeholder} />
    </div>
  )
}

export default InputLoginText
