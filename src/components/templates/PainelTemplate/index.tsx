import React, { useContext, useLayoutEffect } from 'react'
import PainelHeader from '../../organisms/painel/PainelHeader'
import PainelSidebar from '../../organisms/painel/PainelSidebar'
import PainelTrips from '../../organisms/painel/PainelTrips'

import { alertSucess } from '../../../utils/alert'
import PainelGlobalContext from '../../../contexts/painel/PainelGlobalContext'
import PainelRegister from '../../organisms/painel/PainelRegister'

const PainelTemplate = (): JSX.Element => {
  const { state } = useContext(PainelGlobalContext)
  const { registerBtnActive } = state.register
  const { header, sidebar } = state.currentPage

  useLayoutEffect(() => {
    alertSucess('conectado', '#4C4C4C', '#ffffff')
  }, [])

  return (
    <div className="w-[94%] mx-auto flex">
      <PainelSidebar />
      <section className="grow p-2 flex flex-col formWidth:w-[500px]">
        <PainelHeader
          subTitle={header.subTitle}
          tittle={
            sidebar.btnActive === 'register' ? registerBtnActive : header.title
          }
        />
        <div className="w-full pl-10 pt-4 relative">
          {sidebar.btnActive === 'controlTrip' ? <PainelTrips /> : ''}
          {sidebar.btnActive === 'register' ? <PainelRegister /> : ''}
        </div>
      </section>
    </div>
  )
}

export default PainelTemplate
