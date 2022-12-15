import { SearchUsersActions } from '../actions/SearchUsersActions'
import { ISearchUsers } from '../interfaces/ISearchUsers'

const SearchUsersReducer = (
  state: ISearchUsers,
  action: SearchUsersActions
): ISearchUsers => {
  const { type, payload } = action

  switch (type) {
    case 'USERS_CHANGE_VALUE': {
      return {
        inputValue: payload
      }
    }
    default:
      return state
  }
}

export default SearchUsersReducer
