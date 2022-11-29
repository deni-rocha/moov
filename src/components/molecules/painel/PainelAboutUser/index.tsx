import React from 'react'
import { IPainelBtn } from '../PainelBtn'

interface Props extends IPainelBtn {
  nome: string
  perfil: string
}

const PainelAboutUser = ({
  className,
  children,
  isExpanded,
  ...rest
}: Props): JSX.Element => {
  return (
    <button
      {...rest}
      className={`h-14 rounded-md p-2 gap-2 flex transition-all duration-300 ${className} ${
        isExpanded ? 'w-52' : 'w-32'
      }`}
    >
      {children}
    </button>
  )
}

export default PainelAboutUser
