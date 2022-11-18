import React from 'react'
import Input from '../../../atoms/login/Input'
interface Props {
  placeholder: string
  type: string
  name: string
  children?: React.ReactNode
}

const InputLoginText = ({ placeholder, name }: Props): JSX.Element => {
  return (
    <div className="w-full relative flex">
      <Input type="text" name={name} placeholder={placeholder} />
    </div>
  )
}

export default InputLoginText
