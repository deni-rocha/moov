import React from 'react'

export interface IPainelBtn
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string
  children: React.ReactNode
  isExpanded: boolean
}

const PainelBtn = ({
  className,
  children,
  isExpanded,
  ...rest
}: IPainelBtn): JSX.Element => {
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

export default PainelBtn
