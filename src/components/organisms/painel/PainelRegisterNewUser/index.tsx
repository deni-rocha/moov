import React, { useState } from 'react'
import Input from '../../../atoms/Input'
import icon from '../../../../assets/input/icon/icon.svg'

const initialState = {
  email: '',
  nome: '',
  senha: '',
  permissao: '',
  status: '',
  setor: '',
  captcha: ''
}

// const endState = {
//   email: 'eu.denilsonrocha@gmail.com',
//   nome: 'denilson rocha',
//   empresa: 'audax company',
//   assunto: 'vaga dev',
//   textArea: 'quero muito uma vaga',
//   captcha: 'false'
// }

const Form = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false)
  const [formValues, setFormValues] = useState(initialState)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    let { name, value, type, checked } = e.target
    const isCheckbox = type === 'checkbox'

    if (isCheckbox) {
      console.log('sim, é um checkbox!', checked)

      value = checked ? 'aceito' : 'recusado'
    }

    updateData(name, value)
  }

  function updateData(name: string, value: string): void {
    setFormValues({ ...formValues, [name]: value })
  }

  function submitForm(e: React.FormEvent<HTMLFormElement>): void {
    const { nome, senha, permissao, email, setor, captcha } = formValues
    e.preventDefault()

    if (captcha !== 'aceito') return alert('por obséquio passe pelo captcha :)')
    if (nome.length === 0) return alert('por favor corrija seu e-mail')
    if (senha.length === 0) return alert('por favor colocar o nome da empresa')
    if (permissao.length < 3)
      return alert('por gentileza nos informe o assunto')
    if (email.length < 3) return alert('por gentileza corrija o email')
    if (setor.length < 3) return alert('por favor nos conte mais detalhes')

    alert('Eviado! Obrigado, daremos retorno em breve.')
    setFormValues(initialState)
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
        text-center text-xs font-inter space-y-4
        md:text-sm
        "
        >
          <input
            value={formValues.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="E-mail do usuário"
            className="p-2 pl-7 h-12 w-full placeholder:text-bgDefault rounded-md bg-gray-200"
          />
          <div className="flex justify-between relative items-center gap-2">
            <input
              value={formValues.nome}
              onChange={handleChange}
              type="text"
              name="nome"
              placeholder="Nome do usuário"
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
            <input
              value={formValues.nome}
              onChange={handleChange}
              type="text"
              name="permissao"
              placeholder="Permissão do usuário"
              className="p-2 pl-7 h-12 w-full placeholder:text-bgDefault rounded-md bg-gray-200"
            />
            <input
              value={formValues.status}
              onChange={handleChange}
              type="text"
              name="status"
              placeholder="Status"
              className="p-2 pl-7 h-12  w-full placeholder:text-bgDefault rounded-md bg-gray-200"
            />
          </div>
          <div className="flex justify-between relative items-center gap-2">
            <input
              value={formValues.nome}
              onChange={handleChange}
              type="text"
              name="permissao"
              placeholder="Setor do usuário"
              className="p-2 pl-7 h-12 w-8/12 placeholder:text-bgDefault rounded-md bg-gray-200"
            />
            <label
              className="cursor-pointer
             w-40 p-3"
            >
              <input
                onChange={handleChange}
                name="captcha"
                type="checkbox"
                value={formValues.captcha}
                className="mr-2"
              />
              Ultrapassar limites
            </label>
            <p className="text-center w-80 text-[#C6C6C6]">
              Indica que este usuário pode gastar mais do que o limite de
              despesa selecionado na viagem.
            </p>
          </div>
          <div className="w-full justify-end flex xs:flex-col  items-center xs:space-y-4 gap-2">
            <button className="w-52 h-11 text-white bg-[#EB5A46] rounded-md">
              cancelar
            </button>
            <button className="w-52 h-11 text-white bg-[#31D760] rounded-md">
              salvar usuário
            </button>
          </div>
        </form>
      </section>
    </section>
  )
}

export default Form
