import React, { useReducer } from 'react'
import SvgCancel from '../../../../../../assets/painel/painelRegister/SvgCancel'
import SvgConfirm from '../../../../../../assets/painel/painelRegister/SvgConfirm'
import { initialState, reducerFormTipoDespesa } from './reducerFormTipoDespesa'
import Swal from 'sweetalert2'

interface Props {
  setFormIsOpen: React.Dispatch<
    React.SetStateAction<{
      usuarios: boolean
      despesa: boolean
      aprovacao: boolean
    }>
  >
}

const FormTipoDespesa = ({ setFormIsOpen }: Props): JSX.Element => {
  const [{ despesa, arquivo, valor }, dispatchForm] = useReducer(
    reducerFormTipoDespesa,
    initialState
  )
  // const { dispatchSearch } = useContext(SearchListContext)
  // const { updateUser } = useApi()

  window.scrollTo(0, 0)

  const alertSuccessed = (): void => {
    void Swal.fire({
      title: 'usuário atualizado!',
      background: '#ffffff',
      confirmButtonColor: '#4C4C4C'
    }).then((result) => {
      if (result.isConfirmed) {
        setFormIsOpen((prev) => ({
          ...prev,
          despesa: false
        }))
      }
    })
  }

  function alertPreviewData(): void {
    void Swal.fire({
      title: 'confira os dados',
      html: `
      <ul class="preview-data">
      <li class="preview-data-li">
        <p class="preview-data-key">nome</p>
        <p class="preview-data-value">${despesa}</p>
      </li>
      <li class="preview-data-li">
        <p class="preview-data-key">email</p>
        <p class="preview-data-value">${arquivo}</p>
      </li>
      <li class="preview-data-li">
        <p class="preview-data-key">senha</p>
        <p class="preview-data-value">${valor}</p>
      </li>
    </ul>
        `,
      color: '#4C4C4C',
      icon: 'info',
      background: '#ffffff',
      customClass: { confirmButton: 'preview-data-confirmBtn' },
      position: 'top-end',
      confirmButtonText: 'confirmar',
      cancelButtonText: 'cancelar',
      confirmButtonColor: '#31d760',
      cancelButtonColor: '#EB5A46',
      showConfirmButton: true,
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        return alertSuccessed()
      } else {
        return 0
      }
    })
    // .then((res) => {
    //   switch (res) {
    //     case 200: {
    //       dispatchSearch({ type: 'USERS_CHANGE_VALUE', payload: '' })
    //       alertSuccessed()
    //       setRefreshList(true)
    //       break
    //     }
    //     case 0:
    //       break
    //   }
    // })
    // .catch((err: Error) => {
    //   const status = err.cause as number
    //   useErrors(status, {
    //     '409': 'Erro de conflito. Confira os dados e tente novamente.',
    //     defaut:
    //       'Não foi possóvel atualizar o usuário. tente novamente mais tarde.'
    //   })
    // })
  }

  function submitForm(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()

    if (valor.length === 0) return alert('por favor insira um nome')
    if (despesa.length === 0) return alert('por favor informe sua senha')
    if (arquivo.length < 3) return alert('por gentileza corrija o email')

    alertPreviewData()
  }
  return (
    <section className="bg-textPrimary">
      <section
        className="text-bgDefault flex flex-col absolute items-center bg-white z-10 w-full h-full top-0 right-0
        "
      >
        <h2 className="font-bold font-roboto text-center text-lg w-60 my-4 ">
          Novo tipo de despesa
        </h2>
        <form
          onSubmit={submitForm}
          className="
          w-10/12
          max-w-[770px]
          text-center text-xs font-inter space-y-4
          md:text-sm
        "
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="self-start font-bold">
              Despesa
            </label>
            <input
              value={despesa}
              onChange={(e) =>
                dispatchForm({ type: 'despesa', payload: e.target.value })
              }
              type="text"
              name="nome"
              id="nome"
              placeholder="Digite o nome do usuário"
              className="p-2 pl-4 h-12 w-full placeholder:text-bgDefault rounded-md border-2 border-gray-200"
            />
          </div>
          <div className="flex justify-between relative items-center gap-2">
            <div className="w-1/2 flex flex-col gap-2">
              <label htmlFor="valor" className="self-start font-bold">
                Valor total (R$)
              </label>
              <input
                onChange={(e) =>
                  dispatchForm({ type: 'valor', payload: e.target.value })
                }
                type="number"
                name="valor"
                className="p-2 pl-4 h-12 w-full placeholder:text-bgDefault rounded-md border-2 border-gray-200"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <label className="self-start font-bold"> Arquivo </label>
              <div className="relative">
                <label
                  className="absolute block text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="file_input"
                ></label>
                <input
                  onChange={(e) =>
                    dispatchForm({ type: 'arquivo', payload: e.target.value })
                  }
                  className="p-2 pl-4 h-12 w-full placeholder:text-bgDefault rounded-md border-2 border-gray-200"
                  id="file_input"
                  type="file"
                />
              </div>
            </div>
            <div className="flex h-20 relative items-center gap-2">
              <div className="h-12 w-full flex items-center gap-2">
                <div className="w-1/2 flex flex-col gap-2"></div>
              </div>
              <div className="w-1/2 self-end flex justify-center items-center gap-2">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="cursor-pointer"
                />
                <label
                  className="cursor-pointer"
                  htmlFor="checkbox"
                  title="Indica que este usuário pode gastar mais do que o limite de
                  despesa selecionado na viagem."
                >
                  Ultrapassar limites
                </label>
              </div>
            </div>
          </div>
          <div className="w-full justify-end pt-5 flex xs:flex-col items-center xs:space-y-4 gap-2">
            <button
              onClick={() => {
                setFormIsOpen((prev) => ({
                  ...prev,
                  despesa: false
                }))
              }}
              className="w-52 relative h-11 text-white font-bold bg-[#EB5A46] rounded-md"
            >
              <SvgCancel className="absolute left-12 top-4" />
              cancelar
            </button>
            <button
              type="submit"
              className="w-52 h-11 relative text-white font-bold bg-[#31D760] rounded-md cursor-pointer"
            >
              <SvgConfirm className="absolute left-6 top-4" />
              atualizar usuário
            </button>
          </div>
        </form>
      </section>
    </section>
  )
}

export default FormTipoDespesa
