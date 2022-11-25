import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string
  children: React.ReactNode
  isExpanded: boolean
}

const PainelBtn = ({
  className,
  children,
  isExpanded,
  ...rest
}: Props): JSX.Element => {
  return (
    <button
      {...rest}
      className={`h-14 rounded-md p-2 gap-2 flex ${className} ${
        isExpanded ? 'w-52' : 'w-32'
      }`}
    >
      {children}
    </button>
  )
}

export default PainelBtn
