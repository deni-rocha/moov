import React, { useContext, useState } from 'react'
import iconNewUser from '../../../../assets/painel/painelRegister/icon-new-user.svg'
import PainelRegisterContext from '../../../../contexts/painel/painelRegister'
import PainelDataNavLi from '../../../molecules/painel/PainelDataNavLi'
import PainelSearch from '../PainelSearch'
import { userDelete, userList } from '../../../../services/api'
import { IUserList } from '../../../../types/IUserList'
import Text from '../../../atoms/Text'
import PainelRegisterFormUser from '../PainelRegisterFormUser'
import SvgDelete from '../../../../assets/painel/painelRegister/SvgDelete'
import SvgEdit from '../../../../assets/painel/painelRegister/SvgEdit'
import Swal from 'sweetalert2'
import UserContext from '../../../../contexts/painel/user'
import { alertErrorDeleteUser } from '../../../../utils/alert'

const PainelRegister = (): JSX.Element => {
  const { token } = useContext(UserContext)
  const { registerBtnActive, formUserChecked, setPainelRegister } = useContext(
    PainelRegisterContext
  )
  const [btnActive, setBtnActive] = useState('')
  const [dataList, setDataList] = useState<IUserList>([])

  function alertConfirm(id: number): void {
    void Swal.fire({
      title: 'deletar usuário?',
      color: '#4C4C4C',
      icon: 'warning',
      customClass: 'custom-sweetalert',
      width: '300px',
      background: '#ffffff',
      position: 'top-end',
      confirmButtonText: 'deletar',
      cancelButtonText: 'cancelar',
      confirmButtonColor: '#EB5A46',
      cancelButtonColor: '#31d760',
      showConfirmButton: true,
      showCancelButton: true
    })
      .then((result) => {
        if (result.isConfirmed) {
          return userDelete(id, token)
        }
      })
      .then((data) => {
        switch (data) {
          case 409:
            alertErrorDeleteUser('OPS! Sem permissão para deletar esse usuário')
            break
          default:
            alertErrorDeleteUser('OPS! Sua navegação expirou')
        }
      })
  }

  function getAllUsers(): void {
    void (async (): Promise<[]> => {
      try {
        const res = await userList(token)
        if (res !== null) setDataList(res)

        return []
      } catch (err) {
        console.log(err)
        return []
      }
    })()
  }
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
      <div className={`w-full pt-4 mt-4 font-inter ${usersChecked}`}>
        <nav className="">
          <ul
            className={`border-b-2 pb-3 text-disabled flex gap-8 font-bold uppercase text-xs `}
          >
            <PainelDataNavLi
              btnId={registerBtnActive}
              btnActive={btnActive}
              setBtnActive={setBtnActive}
            >
              <p onClick={getAllUsers}>usuários cadastrados</p>
            </PainelDataNavLi>
          </ul>
        </nav>
        <div className="mt-8">
          <nav>
            <ul className="flex justify-around p-2 border-y-2">
              <Text content="Nome" />
              <Text content="E-mail" className="w-48" />
              <Text content="Perfil" />
              <Text content="Sexo" />
              <Text content="Status" />
              <Text content="Editar" />
            </ul>
          </nav>
          <ul className="">
            {btnActive === 'usuários' ? (
              dataList.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex h-11 p-2 mb-1 bg-[#f7f9fb] gap-4 justify-around lowercase"
                  >
                    <Text content={item.nome} />
                    <Text content={item.email} className="w-48" />
                    <Text content={item.perfil} />
                    <Text content={item.sexo} />
                    <Text content={`${item.ativo ? 'ativo' : 'desativado'}`} />
                    <div className="w-32 h-7 flex items-center gap-3">
                      <button>
                        <SvgEdit />
                      </button>
                      <button onClick={() => alertConfirm(item.id)}>
                        <SvgDelete />
                      </button>
                    </div>
                  </li>
                )
              })
            ) : (
              <p className="m-auto h-28 justify-center flex items-end w-60">
                por favor, atualize a lista!
              </p>
            )}
          </ul>
        </div>
      </div>
      {/* <div className="max-w-[1105px] border-2 mb-3 items-center p-4 justify-between rounded-md border-zinc-300 flex">
        {form ? <Form /> : ''}
        <p className="font-bold uppercase text-sm">cadastrar novos usuários</p>
        <button
          onClick={() => {
            setPainelRegister({ registerBtnActive: 'users', form: true })
          }}
          className="bg-[#31d760] w-48 relative h-11 flex items-center justify-center rounded-md text-white p-4"
        >
          <img src={iconNewUser} alt="icon" className="absolute left-7 top-4" />
          <p className="uppercase text-xs font-semibold">novos usuários</p>
        </button>
      </div>
      <PainelSearch title="Pesquisar nome ou e-mail" hasButton={false} />
      <div className=" w-full pt-4 mt-4 font-inter">
        <nav className="">
          <ul
            className={`border-b-2 pb-3 text-disabled flex gap-8 font-bold uppercase text-xs `}
          >
            {registerBtnActive === 'users' ? (
              <PainelDataNavLi
                btnId={registerBtnActive}
                btnActive={btnActive}
                setBtnActive={setBtnActive}
              >
                usuários cadastrados
              </PainelDataNavLi>
            ) : (
              ''
            )}
          </ul>
        </nav>
        <div className="mt-8">
          <nav>
            <ul className="flex justify-around p-2 border-y-2">
              <Text content="Nome" />
              <Text content="E-mail" className="w-48" />
              <Text content="Perfil" />
              <Text content="Sexo" />
              <Text content="Status" />
            </ul>
          </nav>
          <ul className="">
            {btnActive === 'users' ? (
              dataList.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex h-11 p-2 mb-1 bg-[#f7f9fb] gap-4 justify-around lowercase"
                  >
                    <Text content={item.nome} />
                    <Text content={item.email} className="w-48" />
                    <Text content={item.perfil} />
                    <Text content={item.sexo} />
                    <Text content={`${item.ativo ? 'ativo' : 'desativado'}`} />
                  </li>
                )
              })
            ) : (
              <p className="m-auto h-28 justify-center flex items-end w-60">
                por favor, atualize a lista!
              </p>
            )}
          </ul>
        </div>
      </div> */}
    </>
  )
}

export default PainelRegister
