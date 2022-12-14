import React, { useContext } from 'react'
import AuthContext from '../../../../contexts/auth/AuthContext'
import LoaderContext from '../../../../contexts/login/loader'

interface Props {
  email: string
  senha: string
}

const LoginBodyFooter = ({ email, senha }: Props): JSX.Element => {
  const { signin } = useContext(AuthContext)
  const { setLoading } = useContext(LoaderContext)

  function submit(): void {
    setLoading(true)

    void (async () => {
      await signin(email, senha)

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
