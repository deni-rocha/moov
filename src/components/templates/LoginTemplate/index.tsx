import React from 'react'
import LoginBody from '../../organisms/login/LoginBody'
import LoginHeader from '../../molecules/login/LoginHeader'
import { LoaderProvider } from '../../../contexts/login/loader'

const LoginTemplate = (): JSX.Element => {
  return (
    <LoaderProvider>
      <div
        className="
        xs:w-10/12 xs:h-10/12
        bg-[#848484] text-white w-[400px] h-[517px] flex items-center flex-col rounded-xl drop-shadow-md
        "
      >
        <LoginHeader />
        <LoginBody />
      </div>
    </LoaderProvider>
  )
}

export default LoginTemplate
