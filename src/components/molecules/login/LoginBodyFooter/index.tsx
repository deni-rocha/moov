import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import login, { ILogin } from '../../../../api/login'
import AuthContext from '../../../../contexts/auth'

interface Props {
  email: string
  senha: string
}
const LoginBodyFooter = ({ email, senha }: Props): JSX.Element => {
  const { signed, setSigned } = useContext(AuthContext)
  const navigate = useNavigate()
  function alertError(): void {
    void Swal.fire({
      background: '#4C4C4C',
      width: '200px',
      position: 'top-end',
      icon: 'error',
      showConfirmButton: false,
      timer: 1500
    })
  }
  function submit(): void {
    const logar = async (): Promise<ILogin | null> => {
      try {
        const res = await login(email, senha)

        if (res === null) return null

        const data = { signed: false, token: res.token }

        sessionStorage.setItem('@App-login', JSON.stringify(data))
        setSigned(true)

        navigate('/')
        return res
      } catch (err) {
        return null
      }
    }

    void logar()
    if (!signed) alertError()
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
