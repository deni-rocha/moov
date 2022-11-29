import React, { useContext } from 'react'
import logo from '../../../../assets/login/logo.svg'
import LoaderContext from '../../../../contexts/loader'

const LogoLogin = (): JSX.Element => {
  const { loading } = useContext(LoaderContext)
  return (
    <div className={`relative w-20 h-20 ${loading ? 'animate-bounce' : ''}`}>
      <div className="absolute">
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}
export default LogoLogin
