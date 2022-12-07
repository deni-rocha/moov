export type RegisterActions =
  | {
      type: 'REGISTER_CHANGE_BTN'
      payload: string
    }
  | {
      type: 'FORM_TOGGLE'
      payload: boolean
    }
