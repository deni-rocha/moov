import React, { useContext, useEffect, useState } from 'react'
import PainelDataNavLi from '../../../molecules/painel/PainelDataNavLi'
import Text from '../../../atoms/Text'
import SvgDelete from '../../../../assets/painel/painelRegister/SvgDelete'
import SvgEdit from '../../../../assets/painel/painelRegister/SvgEdit'
import Swal from 'sweetalert2'
import { alertErrorDeleteUser } from '../../../../utils/alert'
import { userDelete, userList } from '../../../../services/api'
import { IUserList } from '../../../../types/IUserList'
import PainelContext from '../../../../contexts/painel'
import SvgPainelRefresh from '../../../../assets/painel/painelData/SvgPainelRefresh'
import AuthContext from '../../../../contexts/auth/AuthContext'

interface Props {
  usersChecked: string
}
const ListUsers = ({ usersChecked }: Props): JSX.Element => {
  const { state } = useContext(PainelContext)
  const { registerBtnActive } = state.register

  const [dataList, setDataList] = useState<IUserList>([])
  const { token } = useContext(AuthContext)
  const existData = dataList.length > 1

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
          return userDelete(id, token ?? 'token nulo')
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

  useEffect(() => {
    getAllUsers()
  }, [token])

  function getAllUsers(): void {
    void (async (): Promise<void> => {
      const res = await userList(token ?? 'token nulo')
      const isError = typeof res === 'number'

      if (!isError) {
        console.log(
          '%c lista de usuários atualizada',
          'background: black; color: white;'
        )
        setDataList(res)
        return
      }

      console.log('%c atualizando token', 'background: yellow; color: black;')
    })()
  }

  console.log(dataList)
  return (
    <div className={`w-full pt-4 mt-4 font-inter ${usersChecked}`}>
      <nav className="">
        <ul
          className={`border-b-2 pb-3 text-disabled flex gap-8 font-bold uppercase text-xs `}
        >
          <PainelDataNavLi btnId="usuários">
            <p onClick={getAllUsers}>usuários cadastrados</p>
          </PainelDataNavLi>
          <button
            onClick={getAllUsers}
            className="p-2 rounded-md items-center transition-colors ease-in gap-1 hover:text-white hover:bg-secondary cursor-pointer flex"
          >
            <SvgPainelRefresh />
            <p className="uppercase">atualizar</p>
          </button>
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
        {existData && registerBtnActive === 'usuários' ? (
          <ul className="">
            {dataList.map((item, index) => {
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
            })}
          </ul>
        ) : (
          <p className="text-black m-auto h-28 justify-center flex items-end w-60">
            carregando
          </p>
        )}
      </div>
    </div>
  )
}

export default ListUsers
