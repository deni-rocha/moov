import React from 'react'
import LoginTitle from '../../../atoms/login/LoginTitle'
import LoginLogo from '../LoginLogo'

const LoginHeader = (): JSX.Element => {
  return (
    <div className="w-full h-32 flex flex-col mt-10 items-center">
      <LoginLogo />
      <LoginTitle />
    </div>
  )
}

export default LoginHeader
