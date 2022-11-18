import React, { InputHTMLAttributes } from 'react'

const LoginInput = ({
  ...rest
}: InputHTMLAttributes<HTMLInputElement>): JSX.Element => {
  return (
    <input
      {...rest}
      className="h-9 rounded-md text-[#535353] placeholder:text-[#535353] pl-2 w-full outline-none"
    />
  )
}

export default LoginInput
