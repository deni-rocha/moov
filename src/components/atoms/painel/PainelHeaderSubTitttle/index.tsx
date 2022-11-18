import React from 'react'

interface Props {
  subTittle: string
}

const PainelHeaderSubTitttle = ({ subTittle }: Props): JSX.Element => {
  return <h2 className="text-sm">{subTittle}</h2>
}

export default PainelHeaderSubTitttle
