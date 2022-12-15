import React, { useState, useReducer } from 'react'
import Input from '../../../atoms/Input'
import icon from '../../../../assets/input/icon/icon.svg'
import { alertError, alertSucess } from '../../../../utils/alert'
import { AxiosError } from 'axios'
import SvgCancel from '../../../../assets/painel/painelRegister/SvgCancel'
import SvgConfirm from '../../../../assets/painel/painelRegister/SvgConfirm'
import { reducerFormEdit } from './reducerFormEdit'
import { useApi } from '../../../../hooks/useApi'

interface Props {
  currentId: number
  currentNome: string
  currentEmail: string
  currentSexo: string
  currentPerfil: string
  setFormEditIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const PinelFormEditUser = ({
  currentId,
  currentNome,
  currentEmail,
  currentSexo,
  currentPerfil,
  setFormEditIsOpen
}: Props): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false)
  const [{ nome, email, senha, sexo, perfil }, dispatchForm] = useReducer(
    reducerFormEdit,
    {
      nome: currentNome,
      email: currentEmail,
      senha: '',
      sexo: currentSexo,
      perfil: currentPerfil
    }
  )

  const api = useApi()

  window.scrollTo(0, 0)

  function submitForm(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()

    if (nome.length === 0) return alert('por favor insira um nome')
    if (senha.length === 0) return alert('por favor informe sua senha')
    if (email.length < 3) return alert('por gentileza corrija o email')

    void (async () => {
      try {
        const res = await api.updateUser(
          currentId,
          perfil,
          email,
          nome,
          senha,
          sexo
        )

        console.log(res)

        switch (res.status) {
          case 200:
            alertSucess('usuário atualizado', '#4C4C4C', '#ffffff')
            break
        }
        dispatchForm({ type: 'reset' })
      } catch (error) {
        const err = error as AxiosError
        switch (err.response?.status) {
          case 500:
            alertError('erro no servidor', '#4C4C4C', '#ffffff')
            break
          // case 409:
          //   alertError('e-mail já está em uso', '#4C4C4C', '#ffffff')
          //   break
          default:
            alertError('usuário não atualizado', '#4C4C4C', '#ffffff')
        }
      }
    })()
  }
  return (
    <section className="bg-textPrimary">
      <section
        className="text-bgDefault flex flex-col absolute items-center bg-white z-10 w-full h-full top-0 right-0
        "
      >
        <h2 className="font-bold font-roboto text-center text-lg w-60 my-4 ">
          Editar usuário
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
                placeholder={'nova senha para esse usuário'}
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
                setFormEditIsOpen(false)
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

export default PinelFormEditUser
