import React from 'react'
import PainelTemplate from '../../components/templates/PainelTemplate'
import { PainelGlobalProvider } from '../../contexts/painel/PainelGlobalContext'

const Painel = (): JSX.Element => {
  return (
    <PainelGlobalProvider>
      <div className="bg-primary text-secondary">
        <PainelTemplate />
      </div>
    </PainelGlobalProvider>
  )
}

export default Painel
