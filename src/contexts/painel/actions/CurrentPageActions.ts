import { ICurrentPageHeader } from '../interfaces/currentPage'

export type CurrentPageActions =
  | { type: 'ADD_HEADER'; payload: ICurrentPageHeader }
  | { type: 'SIDEBAR_CHANGE_BTN'; payload: { btnActive: string } }
