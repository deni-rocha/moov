import { createContext } from 'react'
import { SearchUsersActions } from './actions/SearchUsersActions'
import { ISearchUsers } from './interfaces/ISearchUsers'

export const initialStateSearchList = {
  inputValue: ''
}

interface ISearchListContext {
  searchState: ISearchUsers
  dispatchSearch: React.Dispatch<SearchUsersActions>
}

export const SearchListContext = createContext<ISearchListContext>({
  searchState: initialStateSearchList,
  dispatchSearch: () => {}
})
