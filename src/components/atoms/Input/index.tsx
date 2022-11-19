import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className: string
  type: string
  name: string
  placeholder: string
}

const Input = ({ className, type, name, placeholder }: Props): JSX.Element => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`h-9 rounded-md pl-2 w-full outline-none ${className}`}
    />
  )
}

export default Input
