import React, { createContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

interface IPainelData {
  painelHeader: {
    title: string
    subTitle: string
  }
  painelSidebar: {
    btnActive: string
  }
}

interface IPainel extends IPainelData {
  setData: React.Dispatch<React.SetStateAction<IPainelData>>
}

const initialValue: IPainel = {
  painelHeader: {
    title: 'Olá, que bom ver você aqui :)',
    subTitle: ''
  },
  painelSidebar: {
    btnActive: ''
  },
  setData: () => {}
}
const PainelContext = createContext<IPainel>(initialValue)

export const PainelProvider = ({ children }: Props): JSX.Element => {
  const [data, setData] = useState({
    painelHeader: initialValue.painelHeader,
    painelSidebar: initialValue.painelSidebar
  })

  return (
    <PainelContext.Provider value={{ ...data, setData }}>
      {children}
    </PainelContext.Provider>
  )
}

export default PainelContext
