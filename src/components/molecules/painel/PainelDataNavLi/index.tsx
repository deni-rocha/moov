import React, { ReactNode, useContext } from 'react'
import PainelContext from '../../../../contexts/painel'
import BorderSelected from '../../../atoms/BorderSelected'

interface Props {
  children: ReactNode
  btnId: string
}

const PainelDataNavLi = ({ children, btnId }: Props): JSX.Element => {
  const { state, dispatch } = useContext(PainelContext)

  const { registerBtnActive } = state.register
  return (
    <li
      onClick={() => dispatch({ type: 'REGISTER_CHANGE_BTN', payload: btnId })}
      className={`flex items-center gap-1 cursor-pointer relative ${
        registerBtnActive === btnId ? ' text-secondary ' : 'text-disabled'
      }`}
    >
      {children}
      {registerBtnActive === btnId ? <BorderSelected /> : ''}
    </li>
  )
}

export default PainelDataNavLi
