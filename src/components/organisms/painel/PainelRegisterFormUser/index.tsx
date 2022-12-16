import React, { useState, useReducer } from 'react'
import Input from '../../../atoms/Input'
import icon from '../../../../assets/input/icon/icon.svg'
import SvgCancel from '../../../../assets/painel/painelRegister/SvgCancel'
import SvgConfirm from '../../../../assets/painel/painelRegister/SvgConfirm'
import { initialState, reducerForm } from './reducerForm'
import Swal from 'sweetalert2'
import { useErrors } from '../../../../hooks/useErrors'
import { useApi } from '../../../../hooks/useApi'

interface Props {
  setRefreshList: React.Dispatch<React.SetStateAction<boolean>>
  setFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const PainelRegisterFormUser = ({
  setFormIsOpen,
  setRefreshList
}: Props): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false)
  const [{ nome, email, senha, sexo, perfil }, dispatchForm] = useReducer(
    reducerForm,
    initialState
  )
  const { createUser } = useApi()
  const alertSuccessed = (): void => {
    void Swal.fire({
      title: 'usuário cadastrado!',
      background: '#ffffff',
      confirmButtonColor: '#4C4C4C'
    }).then((result) => {
      if (result.isConfirmed) {
        setFormIsOpen(false)
      }
    })
  }
  function alertPreviewData(): void {
    void Swal.fire({
      title: 'Deseja prosseguir?',
      html: `
      <ul class="preview-data">
      <li class="preview-data-li">
        <p class="preview-data-key">nome</p>
        <p class="preview-data-value">${nome}</p>
      </li>
      <li class="preview-data-li">
        <p class="preview-data-key">email</p>
        <p class="preview-data-value">${email}</p>
      </li>
      <li class="preview-data-li">
        <p class="preview-data-key">senha</p>
        <p class="preview-data-value">${senha}</p>
      </li>
      <li class="preview-data-li">
        <p class="preview-data-key">sexo</p>
        <p class="preview-data-value">${sexo}</p>
      </li>
      <li class="preview-data-li">
        <p class="preview-data-key">perfil</p>
        <p class="preview-data-value">${perfil}</p>
      </li>
    </ul>
        `,
      color: '#4C4C4C',
      icon: 'question',
      background: '#ffffff',
      customClass: { confirmButton: 'preview-data-confirmBtn' },
      position: 'top-end',
      confirmButtonText: 'Sim. Cadastrar usuário',
      cancelButtonText: 'Não. Voltar para editar',
      confirmButtonColor: '#31d760',
      cancelButtonColor: '#EB5A46',
      showConfirmButton: true,
      showCancelButton: true
    })
      .then((result) => {
        if (result.isConfirmed) {
          return createUser(perfil, email, nome, senha, sexo)
        } else {
          return 0
        }
      })
      .then((res) => {
        switch (res) {
          case 200: {
            alertSuccessed()
            setRefreshList(true)
            break
          }
          case 0:
            break
        }
      })
      .catch((err: Error) => {
        const status = err.cause as number
        useErrors(status, {
          '409': 'e-mail já está em uso',
          defaut: 'usuário não cadastrado'
        })
      })
  }
  function submitForm(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()

    if (nome.length === 0) return alert('por favor insira um nome')
    if (senha.length === 0) return alert('por favor informe sua senha')
    if (email.length < 3) return alert('por gentileza corrija o email')

    alertPreviewData()
  }
  return (
    <section className="bg-textPrimary">
      <section
        className="text-bgDefault flex flex-col absolute items-center bg-white z-10 w-full h-full top-0 right-0
        "
      >
        <h2 className="font-bold font-roboto text-center text-lg w-60 my-4 ">
          Novo usuário
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
              Nome do usuário
            </label>
            <input
              value={nome}
              onChange={(e) =>
                dispatchForm({ type: 'nome', payload: e.target.value })
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
              <label htmlFor="email" className="self-start font-bold">
                E-mail do usuário
              </label>
              <input
                value={email}
                onChange={(e) =>
                  dispatchForm({ type: 'email', payload: e.target.value })
                }
                type="email"
                name="email"
                placeholder="Digite o e-mail do usuário"
                className="p-2 pl-4 h-12 w-full placeholder:text-bgDefault rounded-md border-2 border-gray-200"
              />
            </div>
            <div className="relative flex flex-col w-1/2 gap-2">
              <label htmlFor="senha" className="self-start font-bold">
                Senha
              </label>
              <Input
                value={senha}
                onChange={(e) =>
                  dispatchForm({ type: 'senha', payload: e.target.value })
                }
                type={showPassword ? 'text' : 'password'}
                placeholder={'Escolha uma senha para esse usuário'}
                name="senha"
                id="senha"
                className="formWidth:pr-7 p-2 border-2 truncate pl-4 h-12 w-full placeholder:text-bgDefault rounded-md border-gray-200"
              />
              <div
                className="
              absolute top-8 right-0 cursor-pointer 
              items-center justify-end h-9 flex 
              w-10"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img src={icon} alt="icon" className="mr-2" />
              </div>
            </div>
          </div>
          <div className="flex h-20 relative items-center gap-2">
            <div className="h-12 w-full flex items-center gap-2">
              <div className="w-1/2 flex flex-col gap-2">
                <label className="self-start font-bold"> Sexo </label>
                <div className="relative">
                  <select
                    value={sexo}
                    name="sexo"
                    onChange={(e) =>
                      dispatchForm({ type: 'sexo', payload: e.target.value })
                    }
                    className="block appearance-none w-full bg-white border border-gray-200 text-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option value="MASCULINO">Masculino</option>
                    <option value="FEMININO">Feminino</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-secondary">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
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
                setFormIsOpen(false)
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
              <SvgConfirm className="absolute left-8 top-4" />
              salvar usuário
            </button>
          </div>
        </form>
      </section>
    </section>
  )
}

export default PainelRegisterFormUser
