import React from 'react'
import PainelHeader from '../../../molecules/painel/PainelHeader'
import PainelControlTrip from '../PainelControlTrip'

const PainelContent = (): JSX.Element => {
  return (
    <section className="grow p-2 flex flex-col">
      <PainelHeader
        subTittle="Controle de viagens"
        tittle="Painel de controle de viagens"
      />
      <PainelControlTrip />
    </section>
  )
}

export default PainelContent
