import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'

const SignRoute = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}

export default SignRoute
