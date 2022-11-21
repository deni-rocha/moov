import React, { useContext } from 'react'
import AuthContext from '../../../../contexts/auth'

interface Props {
  email: string
  senha: string
}
const LoginBodyFooter = ({ email, senha }: Props): JSX.Element => {
  const { signed } = useContext(AuthContext)

  function submit(): void {
    console.log(email, senha, signed)
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
