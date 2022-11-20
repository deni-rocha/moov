import React from 'react'
import SubTitle from '../../../atoms/SubTitle'
import Title from '../../../atoms/Title'

interface Props {
  subTitle: string
  tittle: string
}
const PainelHeader = ({ tittle, subTitle }: Props): JSX.Element => {
  return (
    <div className="w-full h-28 border-b-2 flex flex-col justify-center border-b-zinc-300 pl-10">
      <SubTitle subTitle={subTitle} className="text-[#9b9b9b] text-sm" />
      <Title
        tittle={tittle}
        className="text-lg font-inter font-bold text-[#303030] "
      />
    </div>
  )
}

export default PainelHeader
