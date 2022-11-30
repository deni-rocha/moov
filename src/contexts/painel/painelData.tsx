import React, { createContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

interface IPainelData {
  painelHeader: {
    tittle: string
    subTitle: string
  }
}

interface IPainel extends IPainelData {
  setData: React.Dispatch<React.SetStateAction<IPainelData>>
}

const initialValue = {
  painelHeader: {
    tittle: 'Olá, que bom ver você aqui :)',
    subTitle: ''
  },
  setData: () => {}
}
const PainelContext = createContext<IPainel>(initialValue)

export const PainelProvider = ({ children }: Props): JSX.Element => {
  const [data, setData] = useState({ painelHeader: initialValue.painelHeader })

  return (
    <PainelContext.Provider value={{ ...data, setData }}>
      {children}
    </PainelContext.Provider>
  )
}

export default PainelContext
