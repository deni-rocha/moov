import React, { useContext } from 'react'
import login, { ILogin } from '../../../../api/login'
import AuthContext from '../../../../contexts/auth'

interface Props {
  email: string
  senha: string
}
const LoginBodyFooter = ({ email, senha }: Props): JSX.Element => {
  const { setSigned } = useContext(AuthContext)

  function submit(): void {
    const logar = async (): Promise<ILogin | null> => {
      try {
        const res = await login(email, senha)

        if (res === null) return null

        const data = { signed: false, token: res.token }

        sessionStorage.setItem('@App-login', JSON.stringify(data))
        setSigned(true)

        return res
      } catch (err) {
        setSigned(false)
        return null
      }
    }

    void logar()
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
