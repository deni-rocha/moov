import { createContext } from 'react'

export const initialState = {
  inputValue: '',
  setInputValue: () => {}
}

interface ISearchListContext {
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

export const SearchListContext = createContext<ISearchListContext>(initialState)
