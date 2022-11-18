import React from 'react'
import logo from '../../../../assets/login/logo.svg'

const LogoLogin = (): JSX.Element => {
  return (
    <div className="relative w-20 h-20">
      <div className="absolute">
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}
export default LogoLogin
