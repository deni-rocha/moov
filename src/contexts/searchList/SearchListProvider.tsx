import React, { useState } from 'react'
import { SearchListContext } from './SearchListContext'

interface Props {
  children: React.ReactNode
}
export const SearchListProvider = ({ children }: Props): JSX.Element => {
  const [inputValue, setInputValue] = useState('')

  return (
    <SearchListContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </SearchListContext.Provider>
  )
}
