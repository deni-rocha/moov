import React, { useEffect } from 'react'
import PainelHeader from '../../organisms/painel/PainelHeader'
import PainelSidebar from '../../organisms/painel/PainelSidebar'
import PainelSearch from '../../organisms/painel/PainelSearch'
import PainelData from '../../organisms/painel/PainelData'
// import { alertLoginSucess } from '../../../utils/alert'

const PainelTemplate = (): JSX.Element => {
  useEffect(() => {
    // alertLoginSucess()
  }, [])
  return (
    <div className="w-[94%] mx-auto flex">
      <PainelSidebar />
      <section className="grow p-2 flex flex-col">
        <PainelHeader
          subTitle="Controle de viagens"
          tittle="Painel de controle de viagens"
        />
        <div className=" w-full pl-10 pt-4">
          <PainelSearch />
          <PainelData />
        </div>
      </section>
    </div>
  )
}

export default PainelTemplate
