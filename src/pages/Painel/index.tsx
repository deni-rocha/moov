import React from 'react'
import PainelTemplate from '../../components/templates/PainelTemplate'
import { PainelProvider } from '../../contexts/painel/painelData'
import { UserProvider } from '../../contexts/painel/user'

const Painel = (): JSX.Element => {
  return (
    <UserProvider>
      <PainelProvider>
        <div className="bg-primary text-secondary">
          <PainelTemplate />
        </div>
      </PainelProvider>
    </UserProvider>
  )
}

export default Painel
