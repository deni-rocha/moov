import React, { useContext } from 'react'
import AuthContext from '../../../../contexts/auth/AuthContext'
import LoaderContext from '../../../../contexts/login/loader'
import { alertError, alertSucess } from '../../../../utils/alert'

interface Props {
  email: string
  senha: string
}

const LoginBodyFooter = ({ email, senha }: Props): JSX.Element => {
  const { signin, setSigned } = useContext(AuthContext)
  const { setLoading } = useContext(LoaderContext)

  function submit(): void {
    setLoading(true)

    void (async () => {
      const res = await signin(email, senha)

      if (!res) {
        alertError('login inválido', 'white', '#4C4C4C')
      } else {
        alertSucess('conectado', '#4C4C4C', '#ffffff')
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
