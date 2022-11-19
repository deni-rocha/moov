import React from 'react'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  tittle: string
  className: string
}
const Title = ({ tittle, className }: Props): JSX.Element => {
  return <h1 className={`text-2xl font-light ${className}`}>{tittle}</h1>
}

export default Title
