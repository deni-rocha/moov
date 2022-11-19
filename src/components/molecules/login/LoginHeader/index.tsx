import React from 'react'
import Title from '../../../atoms/Title'
import LoginLogo from '../LoginLogo'

const LoginHeader = (): JSX.Element => {
  return (
    <div className="w-full h-32 flex flex-col mt-10 items-center">
      <LoginLogo />
      <Title className="" tittle="Acessar o moov" />
    </div>
  )
}

export default LoginHeader
