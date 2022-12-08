import React from 'react'
import PainelTemplate from '../../components/templates/PainelTemplate'
import { PainelProvider } from '../../contexts/painel'

const Painel = (): JSX.Element => {
  return (
    <PainelProvider>
      <div className="bg-primary text-secondary">
        <PainelTemplate />
      </div>
    </PainelProvider>
  )
}

export default Painel
