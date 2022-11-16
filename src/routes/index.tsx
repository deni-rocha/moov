import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Painel from '../pages/Painel'
import Login from '../pages/Login'

const Rotas = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/painel" element={<Painel />} />
    </Routes>
  )
}

export default Rotas
