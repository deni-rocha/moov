import React, { ReactNode } from 'react'
import BorderSelected from '../../../atoms/BorderSelected'

interface Props {
  children: ReactNode
  btnId: string
  btnActive: string
  setBtnActive: React.Dispatch<React.SetStateAction<string>>
}

const PainelDataNavLi = ({
  children,
  btnId,
  btnActive,
  setBtnActive
}: Props): JSX.Element => {
  return (
    <li
      onClick={() => setBtnActive(btnId)}
      className={`flex items-center gap-1 cursor-pointer relative ${
        btnActive === btnId ? ' text-secondary ' : 'text-disabled'
      }`}
    >
      {children}
      {btnActive === btnId ? <BorderSelected /> : ''}
    </li>
  )
}

export default PainelDataNavLi
