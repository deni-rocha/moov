import React from 'react'
import LoginInputPassword from '../LoginInputPassword'

export interface PropsSenha {
  senha: string
  setSenha: React.Dispatch<React.SetStateAction<string>>
}

const LoginBodyMain = ({ senha, setSenha }: PropsSenha): JSX.Element => {
  return (
    <>
      <label className="flex flex-col mb-8">
        <p className="font-bold">Senha de acesso</p>
        <LoginInputPassword
          senha={senha}
          setSenha={setSenha}
          name="password"
          placeholder="****************"
        />
      </label>
    </>
  )
}

export default LoginBodyMain
