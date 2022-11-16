import React from 'react'

interface Props {
  placeholder: string
  type: string
  name: string
  children?: React.ReactNode
}

const Input = ({ type, placeholder, name, children }: Props): JSX.Element => {
  return (
    <div className="w-full relative flex">
      <input
        type={type}
        name={name}
        className="h-9 rounded-md text-[#535353] placeholder:text-[#535353] pl-2 w-full outline-none"
        placeholder={placeholder}
      />
      {children}
    </div>
  )
}

export default Input
