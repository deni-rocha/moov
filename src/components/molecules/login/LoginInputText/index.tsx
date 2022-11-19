import React from 'react'
import Input from '../../../atoms/Input'
interface Props {
  placeholder: string
  type: string
  name: string
  children?: React.ReactNode
}

const InputLoginText = ({ placeholder, name }: Props): JSX.Element => {
  return (
    <div className="w-full relative flex">
      <Input
        type="text"
        name={name}
        placeholder={placeholder}
        className="text-secondary placeholder:text-secondary"
      />
    </div>
  )
}

export default InputLoginText
