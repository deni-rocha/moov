import React, {
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState
} from 'react'
import PainelDataNavLi from '../../../../molecules/painel/PainelDataNavLi'
import Text from '../../../../atoms/Text'
import SvgDelete from '../../../../../assets/painel/painelRegister/SvgDelete'
import SvgEdit from '../../../../../assets/painel/painelRegister/SvgEdit'
import Swal from 'sweetalert2'
import { alertErrorDeleteUser } from '../../../../../utils/alert'
import { IUserList } from '../../../../../types/IUserList'
import { useApi } from '../../../../../hooks/useApi'
import Pagination from '../../../Pagination'
import { useFilter } from '../../../../../hooks/useFilter'
import { FormEditUser } from '../Forms'
import { reducerUserEdit } from './reducerUserEdit'
import AuthContext from '../../../../../contexts/auth/AuthContext'
import { SearchListContext } from '../../../../../contexts/painel/SearchList'

interface Props {
  refreshList: boolean
  setRefreshList: React.Dispatch<React.SetStateAction<boolean>>
}

const PageSize = 10

const dataUserForEdit = {
  currentId: 0,
  currentNome: '',
  currentEmail: '',
  currentSexo: '',
  currentPerfil: ''
}
const Usuarios = ({ refreshList, setRefreshList }: Props): JSX.Element => {
  const { token } = useContext(AuthContext)

  const { getAllUsers, deleteUser } = useApi()
  const [dataList, setDataList] = useState<IUserList>([])
  const [currentPage, setCurrentPage] = useState(1)
  const { searchFilter, searchActive } = useFilter(dataList)
  const [stateUserEdit, dispatchUserEdit] = useReducer(
    reducerUserEdit,
    dataUserForEdit
  )
  const { dispatchSearch } = useContext(SearchListContext)
  const [formEditIsOpen, setFormEditIsOpen] = useState(false)
  const currentDataList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize

    console.log('%c atualizando page list', 'background: yellow; color: black;')

    if (searchActive) {
      return searchFilter.slice(firstPageIndex, lastPageIndex)
    }

    return dataList.slice(firstPageIndex, lastPageIndex)
  }, [dataList, currentPage, searchFilter])

  const alertDeleteSuccessed = (): void => {
    void Swal.fire({
      title: 'Excluído com sucesso!',
      background: '#ffffff',
      confirmButtonColor: '#4C4C4C'
    })
  }
  const alertDeleteFailed = (): void => {
    void Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Não é possível excluir esse usuário',
      background: '#ffffff',
      confirmButtonColor: '#4C4C4C'
    })
  }

  function alertConfirm(id: number): void {
    void Swal.fire({
      title: 'Você deseja excluir o usuário?',
      color: '#4C4C4C',
      icon: 'warning',
      customClass: 'custom-sweetalert',
      width: '300px',
      background: '#ffffff',
      position: 'top-end',
      confirmButtonText: 'excluir',
      cancelButtonText: 'cancelar',
      confirmButtonColor: '#EB5A46',
      cancelButtonColor: '#31d760',
      showConfirmButton: true,
      showCancelButton: true
    })
      .then((result) => {
        if (result.isConfirmed) {
          return deleteUser(id)
        } else {
          return 0
        }
      })
      .then((res) => {
        switch (res) {
          case 200:
            dispatchSearch({ type: 'USERS_CHANGE_VALUE', payload: '' })
            alertDeleteSuccessed()
            fetchUsers()
            break
          case 0:
            break
        }
      })
      .catch((err: Error) => {
        switch (err.cause) {
          case 409:
            alertDeleteFailed()
            break
          default:
            alertErrorDeleteUser('OPS! Houve um erro interno. tente mais tarde')
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
  }, [token])

  useEffect(() => {
    if (refreshList) {
      fetchUsers()
      setRefreshList(false)
    }
  }, [refreshList])

  return (
    <div className={`w-full pt-4 mt-4 font-inter`}>
      {formEditIsOpen && (
        <FormEditUser
          setRefreshList={setRefreshList}
          setFormEditIsOpen={setFormEditIsOpen}
          {...stateUserEdit}
        />
      )}
      <nav className="">
        <ul
          className={`border-b-2 pb-3 text-disabled flex gap-8 font-bold uppercase text-xs `}
        >
          <PainelDataNavLi btnId="usuários">
            <p>usuários cadastrados</p>
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
          {!formEditIsOpen &&
            currentDataList.map((item, index) => {
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
                      <SvgEdit
                        onClick={() => {
                          setFormEditIsOpen(true)
                          dispatchUserEdit({ type: 'nome', payload: item.nome })
                          dispatchUserEdit({
                            type: 'email',
                            payload: item.email
                          })
                          dispatchUserEdit({ type: 'sexo', payload: item.sexo })
                          dispatchUserEdit({
                            type: 'perfil',
                            payload: item.perfil
                          })
                          dispatchUserEdit({
                            type: 'id',
                            payload: item.id
                          })
                          // handleEdit(
                          //   item.nome,
                          //   item.email,
                          //   item.sexo,
                          //   item.perfil
                          // )
                        }}
                      />
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

export default Usuarios
