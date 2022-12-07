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

// interface PropsSession {
//   signed: boolean
//   token: string
// }

export const AuthProvider = ({ children }: Props): JSX.Element => {
  const [signed, setSigned] = useState(false)

  useEffect(() => {
    const signedSession = sessionStorage.getItem('@App-login')

    if (signedSession != null) {
      setSigned(true)
    }
  }, [])
  return (
    <AuthContext.Provider value={{ signed, setSigned }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
