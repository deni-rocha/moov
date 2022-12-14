import { useEffect, useState, useContext } from 'react'
import { SearchListContext } from '../contexts/searchList/SearchListContext'
import { IUserList } from '../types/IUserList'

interface IUseFilterType {
  searchActive: boolean
  searchFilter: IUserList | []
}
export function useFilter(data?: IUserList): IUseFilterType {
  const [searchFilter, setSearchFilter] = useState<IUserList | []>([])
  const { inputValue } = useContext(SearchListContext)

  const searchActive = inputValue.length > 0

  useEffect(() => {
    if (data === undefined) return

    const results = data.filter((resp) =>
      resp.nome.toLowerCase().includes(inputValue)
    )
    setSearchFilter(results)
  }, [inputValue])

  return { searchFilter, searchActive }
}
