import React, { useContext, useState } from 'react'
import iconNewUser from '../../../../assets/painel/painelRegister/icon-new-user.svg'
import PainelSearch from '../PainelSearch'
import PainelRegisterFormUser from '../PainelRegisterFormUser'
import ListUsers from '../ListUsers'
import PainelGlobalContext from '../../../../contexts/painel/PainelGlobalContext'
import { SearchListProvider } from '../../../../contexts/painel/SearchList'

const PainelRegister = (): JSX.Element => {
  const { state, dispatch } = useContext(PainelGlobalContext)
  const { registerBtnActive } = state.register
  const [formIsOpen, setFormIsOpen] = useState(false)
  const usersChecked = registerBtnActive === 'usuários' ? '' : 'hidden'

  return (
    <>
      <div
        className={`max-w-[1105px] ${usersChecked} border-2 mb-3 items-center p-4 justify-between rounded-md border-zinc-300 flex`}
      >
        {formIsOpen && <PainelRegisterFormUser setFormIsOpen={setFormIsOpen} />}
        <p className="font-bold uppercase text-sm">cadastrar novos usuários</p>
        <button
          onClick={() => {
            dispatch({ type: 'REGISTER_CHANGE_BTN', payload: 'usuários' })
            setFormIsOpen(true)
          }}
          className="bg-[#31d760] w-48 relative h-11 flex items-center justify-center rounded-md text-white p-4"
        >
          <img src={iconNewUser} alt="icon" className="absolute left-7 top-4" />
          <p className="uppercase text-xs font-semibold">novos usuários</p>
        </button>
      </div>
      <SearchListProvider>
        <PainelSearch title="Pesquisar nome ou e-mail" hasButton={false} />
        <ListUsers usersChecked={usersChecked} />
      </SearchListProvider>
    </>
  )
}

export default PainelRegister
