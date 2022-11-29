import React, { useContext } from 'react'
import AuthContext from '../../../../contexts/auth'
import LoaderContext from '../../../../contexts/loader'
import login from '../../../../services/api/login'
import { alertLoginError, alertLoginSucess } from '../../../../utils/alert'

interface Props {
  email: string
  senha: string
}

const LoginBodyFooter = ({ email, senha }: Props): JSX.Element => {
  const { setSigned } = useContext(AuthContext)
  const { setLoading } = useContext(LoaderContext)

  function submit(): void {
    setLoading(true)

    void (async () => {
      const res = await login(email, senha)

      if (res === null) {
        alertLoginError()
      } else {
        alertLoginSucess()
        setSigned(true)
      }

      setLoading(false)
    })()
  }

  return (
    <button
      onClick={submit}
      className="rounded-xl h-16 mb-4 w-full bg-[#4C4C4C] font-bold hover:brightness-125"
    >
      Fazer Login
    </button>
  )
}

export default LoginBodyFooter
