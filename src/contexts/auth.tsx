import React, { createContext, useState, useEffect } from 'react'

interface Props {
  children: React.ReactNode
}
interface IAuthContext {
  signed: boolean
  setSigned: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthContext = createContext<IAuthContext>({
  signed: false,
  setSigned: () => {}
})

export const AuthProvider = ({ children }: Props): JSX.Element => {
  const [signed, setSigned] = useState(false)

  useEffect(() => {
    sessionStorage.setItem('signed', 'false')
    const signedSession = sessionStorage.getItem('signed')

    if (signedSession != null) {
      const parsed = JSON.parse(signedSession)
      setSigned(parsed)
    }
  }, [])
  return (
    <AuthContext.Provider value={{ signed, setSigned }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
