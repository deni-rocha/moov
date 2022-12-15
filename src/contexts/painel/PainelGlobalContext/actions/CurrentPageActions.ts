import { ICurrentPageHeader } from '../interfaces/currentPage'

export type CurrentPageActions =
  | { type: 'CHANGE_TEXT_HEADER'; payload: ICurrentPageHeader }
  | { type: 'SIDEBAR_CHANGE_BTN'; payload: { btnActive: string } }
