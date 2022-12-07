import React from 'react'
import PainelTemplate from '../../components/templates/PainelTemplate'
import { PainelProvider } from '../../contexts/painel'
import { PainelRegisterProvider } from '../../contexts/painel/painelRegister'
import { UserProvider } from '../../contexts/painel/user'

const Painel = (): JSX.Element => {
  return (
    <UserProvider>
      <PainelProvider>
        <PainelRegisterProvider>
          <div className="bg-primary text-secondary">
            <PainelTemplate />
          </div>
        </PainelRegisterProvider>
      </PainelProvider>
    </UserProvider>
  )
}

export default Painel
