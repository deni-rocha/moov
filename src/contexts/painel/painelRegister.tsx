import React, { createContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

interface IPainelRegisterData {
  registerBtnActive: string
}

interface IPainelRegiter extends IPainelRegisterData {
  setRegisterBtn: React.Dispatch<React.SetStateAction<IPainelRegisterData>>
}

const initialValue: IPainelRegiter = {
  registerBtnActive: '',
  setRegisterBtn: () => {}
}
const PainelRegisterContext = createContext<IPainelRegiter>(initialValue)

export const PainelRegisterProvider = ({ children }: Props): JSX.Element => {
  const [data, setRegisterBtn] = useState({ registerBtnActive: '' })

  return (
    <PainelRegisterContext.Provider value={{ ...data, setRegisterBtn }}>
      {children}
    </PainelRegisterContext.Provider>
  )
}

export default PainelRegisterContext
