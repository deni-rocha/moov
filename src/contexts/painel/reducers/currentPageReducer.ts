import { CurrentPageActions } from '../actions/CurrentPageActions'
import { ICurrentPage } from '../interfaces/currentPage'

export const initialStateCurrentPage = {
  header: {
    title: 'Olá, que bom ver você aqui :)',
    subTitle: ''
  },
  sidebar: {
    btnActive: ''
  }
}

function currentPageReducer(
  state: ICurrentPage,
  action: CurrentPageActions
): ICurrentPage {
  const { type, payload } = action

  switch (type) {
    case 'ADD_HEADER':
      return {
        ...state,
        header: {
          title: payload.title,
          subTitle: payload.subTitle
        }
      }
    case 'SIDEBAR_CHANGE_BTN':
      return {
        ...state,
        sidebar: {
          btnActive: payload.btnActive
        }
      }
    default:
      return state
  }
}

export default currentPageReducer
