import React, { useContext } from 'react'
import iconNewUser from '../../../../assets/painel/painelRegister/icon-new-user.svg'
import PainelRegisterContext from '../../../../contexts/painel/painelRegister'
import PainelSearch from '../PainelSearch'
import PainelRegisterFormUser from '../PainelRegisterFormUser'
import ListData from '../ListData'

const PainelRegister = (): JSX.Element => {
  const { registerBtnActive, formUserChecked, setPainelRegister } = useContext(
    PainelRegisterContext
  )

  const usersChecked = registerBtnActive === 'usuários' ? '' : 'hidden'
  return (
    <>
      <div
        className={`max-w-[1105px] ${usersChecked} border-2 mb-3 items-center p-4 justify-between rounded-md border-zinc-300 flex`}
      >
        {formUserChecked ? <PainelRegisterFormUser /> : ''}
        <p className="font-bold uppercase text-sm">cadastrar novos usuários</p>
        <button
          onClick={() => {
            setPainelRegister({
              registerBtnActive: 'usuários',
              formUserChecked: true
            })
          }}
          className="bg-[#31d760] w-48 relative h-11 flex items-center justify-center rounded-md text-white p-4"
        >
          <img src={iconNewUser} alt="icon" className="absolute left-7 top-4" />
          <p className="uppercase text-xs font-semibold">novos usuários</p>
        </button>
      </div>
      <PainelSearch title="Pesquisar nome ou e-mail" hasButton={false} />
      <ListData usersChecked={usersChecked} />
    </>
  )
}

export default PainelRegister
