import React from 'react'
import LoginBodyFooter from '../../../molecules/login/LoginBodyFooter'
import LoginBodyHeader from '../../../molecules/login/LoginBodyHeader'
import LoginBodyMain from '../../../molecules/login/LoginBodyMain'

const LoginBody = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-6 w-10/12 mt-3">
      <LoginBodyHeader />
      <LoginBodyMain />
      <LoginBodyFooter />
    </section>
  )
}

export default LoginBody
