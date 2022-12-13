import React from 'react'
import '../src/index.css'
import { AuthProvider } from './contexts/auth/AuthProvider'

import Rotas from './routes'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <AuthProvider>
        <Rotas />
      </AuthProvider>
    </div>
  )
}

export default App
