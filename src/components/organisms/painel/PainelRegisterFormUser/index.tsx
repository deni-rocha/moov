import React, { useContext, useState } from 'react'
import Input from '../../../atoms/Input'
import icon from '../../../../assets/input/icon/icon.svg'
import PainelRegisterContext from '../../../../contexts/painel/painelRegister'
import { alertError, alertSucess } from '../../../../utils/alert'
import { apiMoov } from '../../../../services/api'
import { AxiosError } from 'axios'

const initialState = {
  nome: '',
  email: '',
  senha: '',
  sexo: 'MASCULINO',
  perfil: 'NORMAL'
}

const PainelRegisterFormUser = (): JSX.Element => {
  const { registerBtnActive, setPainelRegister } = useContext(
    PainelRegisterContext
  )
  const [showPassword, setShowPassword] = useState(false)
  const [formValues, setFormValues] = useState(initialState)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void {
    const { name, value } = e.target

    updateData(name, value)
  }

  function updateData(name: string, value: string): void {
    setFormValues((prev) => {
      return { ...prev, [name]: value }
    })
  }

  function submitForm(e: React.FormEvent<HTMLFormElement>): void {
    const { nome, senha, email, sexo, perfil } = formValues

    e.preventDefault()

    if (nome.length === 0) return alert('por favor insira um nome')
    if (senha.length === 0) return alert('por favor informe sua senha')
    if (email.length < 3) return alert('por gentileza corrija o email')

    void (async () => {
      try {
        const res = await apiMoov.post('/usuario', {
          perfil,
          email,
          nome,
          senha,
          sexo
        })

        switch (res.status) {
          case 200:
            alertSucess('usuário cadastrado', '#4C4C4C', '#ffffff')
            break
        }
        setFormValues(initialState)
      } catch (error) {
        const err = error as AxiosError
        switch (err.response?.status) {
          case 500:
            alertError('erro no servidor', '#4C4C4C', '#ffffff')
            break
          case 409:
            alertError('e-mail já existe', '#4C4C4C', '#ffffff')
            break
          default:
            alertError('usuário não cadastrado', '#4C4C4C', '#ffffff')
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
          <input
            value={formValues.nome}
            onChange={handleChange}
            type="text"
            name="nome"
            placeholder="Nome do usuário"
            className="p-2 pl-7 h-12 w-full placeholder:text-bgDefault rounded-md bg-gray-200"
          />
          <div className="flex justify-between relative items-center gap-2">
            <input
              value={formValues.email}
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="E-mail do usuário"
              className="p-2 pl-7 h-12 w-full placeholder:text-bgDefault rounded-md bg-gray-200"
            />
            <Input
              value={formValues.senha}
              onChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              placeholder={'Senha para esse usuário'}
              name="senha"
              className="p-2 pl-7 h-12 w-full placeholder:text-bgDefault rounded-md bg-gray-200"
            />
            <div
              className="
            absolute right-0 cursor-pointer 
            items-center justify-end h-9 flex 
            w-10"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img src={icon} alt="icon" className="mr-2" />
            </div>
          </div>
          <div className="flex justify-between relative items-center gap-2">
            <label className="h-12 w-full flex flex-col">
              <span className="self-start font-bold">Sexo</span>
              <div className="relative">
                <select
                  value={formValues.sexo}
                  name="sexo"
                  onChange={handleChange}
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option value="MASCULINO">Masculino</option>
                  <option value="FEMININO">Feminino</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </label>
          </div>
          <div className="w-full justify-end pt-5 flex xs:flex-col items-center xs:space-y-4 gap-2">
            <button
              onClick={() => {
                setPainelRegister({
                  formUserChecked: false,
                  registerBtnActive
                })
              }}
              className="w-52 h-11 text-white font-bold bg-[#EB5A46] rounded-md"
            >
              cancelar
            </button>
            <input
              type="submit"
              value="salvar usuário"
              className="w-52 h-11 text-white font-bold bg-[#31D760] rounded-md cursor-pointer"
            />
          </div>
        </form>
      </section>
    </section>
  )
}

export default PainelRegisterFormUser
