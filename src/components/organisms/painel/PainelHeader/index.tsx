import React from 'react'
import PainelHeaderSubTitttle from '../../../atoms/painel/PainelHeaderSubTitttle'
import PainelHeaderTitttle from '../../../atoms/painel/PainelHeaderTitttle'

interface Props {
  subTittle: string
  tittle: string
}
const PainelHeader = ({ tittle, subTittle }: Props): JSX.Element => {
  return (
    <div className="w-full h-28 border-b-2 flex flex-col justify-center border-b-zinc-300 pl-10">
      <PainelHeaderSubTitttle subTittle={subTittle} />
      <PainelHeaderTitttle tittle={tittle} />
    </div>
  )
}

export default PainelHeader
