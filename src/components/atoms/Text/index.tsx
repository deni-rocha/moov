import React from 'react'

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  content: string
  className?: string
}
const Text = ({ content, className }: Props): JSX.Element => {
  return <p className={`w-32 h-7 truncate ${className ?? ''}`}>{content}</p>
}

export default Text
