import React, { useContext, useState } from 'react'
import PainelDataNavLi from '../../../molecules/painel/PainelDataNavLi'
import Text from '../../../atoms/Text'
import SvgDelete from '../../../../assets/painel/painelRegister/SvgDelete'
import SvgEdit from '../../../../assets/painel/painelRegister/SvgEdit'
import Swal from 'sweetalert2'
import { alertErrorDeleteUser } from '../../../../utils/alert'
import { userDelete, userList } from '../../../../services/api'
import { IUserList } from '../../../../types/IUserList'
import PainelContext from '../../../../contexts/painel'

interface Props {
  usersChecked: string
}
const ListData = ({ usersChecked }: Props): JSX.Element => {
  const { state } = useContext(PainelContext)
  const { token } = state.user
  const { registerBtnActive } = state.register

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

  return (
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
            dataList
              .filter((item, index) => index < 10)
              .map((item, index) => {
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
  )
}

export default ListData
