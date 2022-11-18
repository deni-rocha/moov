import React from 'react'
import PainelContent from '../../organisms/painel/PainelContent'
import PainelSidebar from '../../organisms/painel/PainelSidebar'

const PainelTemplate = (): JSX.Element => {
  return (
    <div className="w-11/12 max-w-[1181px] py-4 flex">
      <PainelSidebar />
      <PainelContent />
    </div>
  )
}

export default PainelTemplate
