import React, { useContext, useState } from 'react'
import iconNewUser from '../../../../assets/painel/painelRegister/icon-new-user.svg'
import PainelSearch from '../PainelSearch'
import { FormUser } from './Forms'
import Usuarios from './Usuarios'
import PainelGlobalContext from '../../../../contexts/painel/PainelGlobalContext'
import { SearchListProvider } from '../../../../contexts/painel/SearchList'
import TipoDeDispesa from './TipoDeDispesa'
import Aprovacao from './Aprovacao'
import FormTipoDespesa from './Forms/FormTipoDespesa'

const PainelRegister = (): JSX.Element => {
  const { state, dispatch } = useContext(PainelGlobalContext)
  const { registerBtnActive } = state.register
  const [formIsOpen, setFormIsOpen] = useState(false)

  const [refreshList, setRefreshList] = useState(false)
  return (
    <>
      <SearchListProvider>
        {(() => {
          switch (registerBtnActive) {
            case 'usuários': {
              return (
                <>
                  <div
                    className={`max-w-[1105px] border-2 mb-3 items-center p-4 justify-between rounded-md border-zinc-300 flex`}
                  >
                    {formIsOpen && (
                      <FormUser
                        setFormIsOpen={setFormIsOpen}
                        setRefreshList={setRefreshList}
                      />
                    )}
                    <p className="font-bold uppercase text-sm">
                      cadastrar novos usuários
                    </p>
                    <button
                      onClick={() => {
                        dispatch({
                          type: 'REGISTER_CHANGE_BTN',
                          payload: 'usuários'
                        })
                        setFormIsOpen(true)
                      }}
                      className="bg-[#31d760] w-48 relative h-11 flex items-center justify-center rounded-md text-white p-4"
                    >
                      <img
                        src={iconNewUser}
                        alt="icon"
                        className="absolute left-7 top-4"
                      />
                      <p className="uppercase text-xs font-semibold">
                        novos usuários
                      </p>
                    </button>
                  </div>
                  <PainelSearch
                    title="Pesquisar nome ou e-mail"
                    hasButton={false}
                  />
                  <Usuarios
                    refreshList={refreshList}
                    setRefreshList={setRefreshList}
                  />
                </>
              )
            }

            case 'tipo de despesa': {
              return (
                <>
                  <div
                    className={`max-w-[1105px] border-2 mb-3 items-center p-4 justify-between rounded-md border-zinc-300 flex`}
                  >
                    {formIsOpen && <FormTipoDespesa />}
                    <p className="font-bold uppercase text-sm">
                      cadastrar novo tipo e despesa
                    </p>
                    <button
                      onClick={() => {
                        dispatch({
                          type: 'REGISTER_CHANGE_BTN',
                          payload: 'usuários'
                        })
                        setFormIsOpen(true)
                      }}
                      className="bg-[#31d760] w-48 relative h-11 flex items-center justify-center rounded-md text-white p-4"
                    >
                      <img
                        src={iconNewUser}
                        alt="icon"
                        className="absolute left-7 top-4"
                      />
                      <p className="uppercase text-xs font-semibold">
                        nova despesa
                      </p>
                    </button>
                  </div>
                  <PainelSearch
                    title="Pesquisar tipo de despesa"
                    hasButton={false}
                  />
                  <TipoDeDispesa />
                </>
              )
            }
            case 'aprovação': {
              return (
                <>
                  <Aprovacao />
                </>
              )
            }
            default:
              return null
          }
        })()}
      </SearchListProvider>
    </>
  )
}

export default PainelRegister
