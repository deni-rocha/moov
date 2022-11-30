import React from 'react'
import SVGPainelHeaderLogo from '../../../../assets/painel/painelHeader/SVGPainelHeaderLogo'
import SubTitle from '../../../atoms/SubTitle'
import Title from '../../../atoms/Title'

interface Props {
  subTitle: string
  tittle: string
}
const PainelHeader = ({ tittle, subTitle }: Props): JSX.Element => {
  return (
    <div className="w-full h-28 border-b-2 flex justify-between items-center border-b-zinc-300">
      <div className="pl-10">
        <SubTitle subTitle={subTitle} className="text-[#9b9b9b] text-sm" />
        <Title
          tittle={tittle}
          className="text-lg font-inter font-bold text-[#303030] capitalize"
        />
      </div>
      <SVGPainelHeaderLogo width={35} height={35} className={''} />
    </div>
  )
}

export default PainelHeader
