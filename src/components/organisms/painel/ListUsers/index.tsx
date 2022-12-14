import React, { useContext, useEffect, useMemo, useState } from 'react'
import PainelDataNavLi from '../../../molecules/painel/PainelDataNavLi'
import Text from '../../../atoms/Text'
import SvgDelete from '../../../../assets/painel/painelRegister/SvgDelete'
import SvgEdit from '../../../../assets/painel/painelRegister/SvgEdit'
import Swal from 'sweetalert2'
import { alertErrorDeleteUser } from '../../../../utils/alert'
import { userDelete } from '../../../../services/api'
import { IUserList } from '../../../../types/IUserList'
// import PainelContext from '../../../../contexts/painel'
import SvgPainelRefresh from '../../../../assets/painel/painelData/SvgPainelRefresh'
import AuthContext from '../../../../contexts/auth/AuthContext'
import { useApi } from '../../../../hooks/useApi'
import Pagination from '../../Pagination'

interface Props {
  usersChecked: string
}

const PageSize = 10

const ListUsers = ({ usersChecked }: Props): JSX.Element => {
  // const { state } = useContext(PainelContext)
  // const { registerBtnActive } = state.register
  const { getAllUsers } = useApi()
  const [dataList, setDataList] = useState<IUserList>([])
  const { token } = useContext(AuthContext)
  const [currentPage, setCurrentPage] = useState(1)

  const currentDataList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize

    console.log('%c atualizando page list', 'background: yellow; color: black;')

    return dataList.slice(firstPageIndex, lastPageIndex)
  }, [dataList, currentPage])

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

  const fetchUsers = (): void => {
    void (async () => {
      const res = await getAllUsers()

      console.log('%c buscando dados', 'background: red; color: white;')
      if (res !== null) setDataList(res)
    })()
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className={`w-full pt-4 mt-4 font-inter ${usersChecked}`}>
      <nav className="">
        <ul
          className={`border-b-2 pb-3 text-disabled flex gap-8 font-bold uppercase text-xs `}
        >
          <PainelDataNavLi btnId="usuários">
            <p>usuários cadastrados</p>
          </PainelDataNavLi>
          <button
            onClick={fetchUsers}
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

        <ul className="">
          {currentDataList.map((item, index) => {
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
        <Pagination
          currentPage={currentPage}
          totalCount={dataList.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  )
}

export default ListUsers
