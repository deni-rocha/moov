import React from 'react'

interface Props {
  tittle: string
}
const PainelHeaderTitttle = ({ tittle }: Props): JSX.Element => {
  return <h1 className="text-lg font-bold text-black">{tittle}</h1>
}

export default PainelHeaderTitttle
