import React from 'react'
import { Link } from 'react-router-dom'

const LoginBodyFooter = (): JSX.Element => {
  return (
    <Link to="painel">
      <button className="rounded-xl h-16 w-full bg-[#4C4C4C] font-bold hover:brightness-125">
        Fazer Login
      </button>
    </Link>
  )
}

export default LoginBodyFooter
