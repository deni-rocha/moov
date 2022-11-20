import React from 'react'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  subTitle: string
  className: string
}
const SubTitle = ({ subTitle, className }: Props): JSX.Element => {
  return <h3 className={`text-2xl font-light ${className}`}>{subTitle}</h3>
}

export default SubTitle
