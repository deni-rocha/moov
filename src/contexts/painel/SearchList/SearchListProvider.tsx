import React, { useReducer } from 'react'
import SearchUsersReducer from './reducers/SearchUsersReducer'
import { initialStateSearchList, SearchListContext } from './SearchListContext'

interface Props {
  children: React.ReactNode
}

export const SearchListProvider = ({ children }: Props): JSX.Element => {
  const [searchState, dispatchSearch] = useReducer(
    SearchUsersReducer,
    initialStateSearchList
  )

  return (
    <SearchListContext.Provider value={{ searchState, dispatchSearch }}>
      {children}
    </SearchListContext.Provider>
  )
}
