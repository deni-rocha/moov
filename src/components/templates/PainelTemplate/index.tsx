import React, { useContext, useEffect } from 'react'
import PainelHeader from '../../organisms/painel/PainelHeader'
import PainelSidebar from '../../organisms/painel/PainelSidebar'
import PainelData from '../../organisms/painel/PainelData'

// import { alertLoginSucess } from '../../../utils/alert'
import PainelContext from '../../../contexts/painel/painelData'
import PainelRegister from '../../organisms/painel/PainelRegister'

const PainelTemplate = (): JSX.Element => {
  const { painelHeader, painelSidebar } = useContext(PainelContext)
  useEffect(() => {
    // alertLoginSucess()
  }, [])
  return (
    <div className="w-[94%] mx-auto flex">
      <PainelSidebar />
      <section className="grow p-2 flex flex-col">
        <PainelHeader
          subTitle={painelHeader.subTitle}
          tittle={painelHeader.tittle}
        />
        <div className=" w-full pl-10 pt-4">
          {painelSidebar.btnActive === 'controlTrip' ? <PainelData /> : ''}
          {painelSidebar.btnActive === 'register' ? <PainelRegister /> : ''}
        </div>
      </section>
    </div>
  )
}

export default PainelTemplate
