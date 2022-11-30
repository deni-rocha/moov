import React, { createContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

interface IPainelRegisterData {
  registerBtnActive: string
  formUserChecked: boolean
}

interface IPainelRegiter extends IPainelRegisterData {
  setPainelRegister: React.Dispatch<React.SetStateAction<IPainelRegisterData>>
}

const initialValue: IPainelRegiter = {
  registerBtnActive: '',
  formUserChecked: false,
  setPainelRegister: () => {}
}
const PainelRegisterContext = createContext<IPainelRegiter>(initialValue)

export const PainelRegisterProvider = ({ children }: Props): JSX.Element => {
  const [data, setPainelRegister] = useState({
    registerBtnActive: '',
    formUserChecked: false
  })

  return (
    <PainelRegisterContext.Provider value={{ ...data, setPainelRegister }}>
      {children}
    </PainelRegisterContext.Provider>
  )
}

export default PainelRegisterContext
