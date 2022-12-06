import React, { useContext } from 'react'
import SVGLoginLogo from '../../../../assets/login/SVGLoginLogo'
import LoaderContext from '../../../../contexts/login/loader'

const LogoLogin = (): JSX.Element => {
  const { loading } = useContext(LoaderContext)
  return (
    <div className={`relative w-20 h-20 ${loading ? 'animate-bounce' : ''}`}>
      <div className="absolute">
        <SVGLoginLogo width={71} height={71} />
      </div>
    </div>
  )
}
export default LogoLogin
