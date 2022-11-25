import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string
  children: React.ReactNode
}

const PainelBtn = ({ className, children, ...rest }: Props): JSX.Element => {
  return (
    <button
      {...rest}
      className={`w-52 h-14 rounded-md p-2 gap-2 flex ${className}`}
    >
      {children}
    </button>
  )
}

export default PainelBtn
