import React, { useState } from 'react'
import LoginBodyFooter from '../../../molecules/login/LoginBodyFooter'
import LoginBodyHeader from '../../../molecules/login/LoginBodyHeader'
import LoginBodyMain from '../../../molecules/login/LoginBodyMain'

const LoginBody = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  // o componente LoginBodyFooter é quem faz o submit dos dados
  return (
    <section className="flex flex-col gap-6 w-10/12 mt-3">
      <LoginBodyHeader email={email} setEmail={setEmail} />
      <LoginBodyMain senha={senha} setSenha={setSenha} />
      <LoginBodyFooter senha={senha} email={email} />
    </section>
  )
}

export default LoginBody
