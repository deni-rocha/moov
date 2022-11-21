import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Painel from '../pages/Painel'

const OtherRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Painel />} />
    </Routes>
  )
}

export default OtherRoutes
