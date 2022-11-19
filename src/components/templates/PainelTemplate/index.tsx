import React from 'react'
import PainelHeader from '../../organisms/painel/PainelHeader'
import PainelSidebar from '../../organisms/painel/PainelSidebar'
import PainelSearch from '../../organisms/painel/PainelSearch'
import PainelData from '../../organisms/painel/PainelData'

const PainelTemplate = (): JSX.Element => {
  return (
    <div className="w-11/12 max-w-[1181px] py-4 flex">
      <PainelSidebar />
      <section className="grow p-2 flex flex-col">
        <PainelHeader
          subTittle="Controle de viagens"
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
