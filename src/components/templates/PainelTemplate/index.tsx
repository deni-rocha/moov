import React, { useContext, useEffect } from 'react'
import PainelHeader from '../../organisms/painel/PainelHeader'
import PainelSidebar from '../../organisms/painel/PainelSidebar'
import PainelData from '../../organisms/painel/PainelData'

import { alertSucess } from '../../../utils/alert'
import PainelContext from '../../../contexts/painel'
import PainelRegister from '../../organisms/painel/PainelRegister'

const PainelTemplate = (): JSX.Element => {
  const { state } = useContext(PainelContext)
  const { registerBtnActive } = state.register
  const { header, sidebar } = state.currentPage
  useEffect(() => {
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
          {sidebar.btnActive === 'controlTrip' ? <PainelData /> : ''}
          {sidebar.btnActive === 'register' ? <PainelRegister /> : ''}
        </div>
      </section>
    </div>
  )
}

export default PainelTemplate
