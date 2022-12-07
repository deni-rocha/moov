import React, { useContext, useEffect } from 'react'
import PainelHeader from '../../organisms/painel/PainelHeader'
import PainelSidebar from '../../organisms/painel/PainelSidebar'
import PainelData from '../../organisms/painel/PainelData'

import { alertSucess } from '../../../utils/alert'
import PainelContext from '../../../contexts/painel/painelData'
import PainelRegister from '../../organisms/painel/PainelRegister'
import PainelRegisterContext from '../../../contexts/painel/painelRegister'

const PainelTemplate = (): JSX.Element => {
  const { painelHeader, painelSidebar } = useContext(PainelContext)
  const { registerBtnActive } = useContext(PainelRegisterContext)

  useEffect(() => {
    alertSucess('conectado', '#4C4C4C', '#ffffff')
  }, [])

  return (
    <div className="w-[94%] mx-auto flex">
      <PainelSidebar />
      <section className="grow p-2 flex flex-col formWidth:w-[500px]">
        <PainelHeader
          subTitle={painelHeader.subTitle}
          tittle={
            painelSidebar.btnActive === 'register'
              ? registerBtnActive
              : painelHeader.title
          }
        />
        <div className="w-full pl-10 pt-4 relative">
          {painelSidebar.btnActive === 'controlTrip' ? <PainelData /> : ''}
          {painelSidebar.btnActive === 'register' ? <PainelRegister /> : ''}
        </div>
      </section>
    </div>
  )
}

export default PainelTemplate
