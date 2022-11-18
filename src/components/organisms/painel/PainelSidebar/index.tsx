import React, { useState } from 'react'
import iconToggleClose from '../../../../assets/painel/sidebar/icon-toggle-close.png'
import iconLogo from '../../../../assets/painel/sidebar/icon-logo.png'
import perfil from '../../../../assets/painel/sidebar/perfil.png'
import iconControlTrip from '../../../../assets/painel/sidebar/icon-control-trip.png'
import iconOnline from '../../../../assets/painel/sidebar/icon-online.png'
import iconEdit from '../../../../assets/painel/sidebar/icon-edit.png'
import iconReport from '../../../../assets/painel/sidebar/icon-report.png'
import iconHelp from '../../../../assets/painel/sidebar/icon-help.png'
import iconLogout from '../../../../assets/painel/sidebar/icon-logout.png'
import { Link } from 'react-router-dom'

const Sidebar = (): JSX.Element => {
  const [btnActive, setBtnActive] = useState('')

  function handleActiveBtn(value: string): void {
    setBtnActive(value)
  }

  return (
    <section className="w-4/12 max-w-[258px] flex gap-20 flex-col border-r-2 border-r-zinc-300">
      <div className="w-full flex flex-col items-center gap-8">
        <div className="w-7 h-7 self-start">
          <img src={iconToggleClose} alt="close" />
        </div>
        <div className="w-48 h-14">
          <img src={iconLogo} alt="logo" />
        </div>
        <div className="w-52 h-14 flex justify-start">
          <div className="relative">
            <div className="w-12 h-14">
              <img src={perfil} alt="perfil" />
            </div>
            <div className="absolute top-7 right-3">
              <img src={iconOnline} alt="online" />
            </div>
          </div>
          <div className="">
            <p className="text-md font-semibold">Maria Santos</p>
            <p className="text-sm">Administrativo</p>
          </div>
        </div>
        <button
          onClick={() => handleActiveBtn('controlTrip')}
          className={`w-52 h-14 flex justify-center items-center gap-2 rounded-md text-white  ${
            btnActive === 'controlTrip' ? 'bg-secondary' : 'text-[#CACACA]'
          }`}
        >
          <div className="w-4 h-4">
            <img src={iconControlTrip} alt="trip-icon" />
          </div>
          <p>Controle de viagens</p>
        </button>
        <button
          onClick={() => handleActiveBtn('register')}
          className={`w-52 h-14 flex flex-col gap-2 p-2 rounded-md text-white relative ${
            btnActive === 'register'
              ? 'bg-secondary h-48'
              : 'text-[#CACACA] h-14'
          }`}
        >
          <div className="ml-4 flex items-center gap-2">
            <div className="w-4 h-4">
              <img src={iconEdit} alt="edit-icon" />
            </div>
            <p>Cadastráveis</p>
          </div>
          <ul
            className={`ml-10 flex flex-col gap-3 items-start absolute top-9 ${
              btnActive === 'register' ? 'flex' : 'hidden'
            }`}
          >
            <li>Usuários</li>
            <li>Setores</li>
            <li>Tipo de despesa</li>
            <li>Aprovação</li>
          </ul>
        </button>
        <button
          onClick={() => handleActiveBtn('report')}
          className={`w-52 h-14 flex justify-start items-center gap-2 rounded-md text-white ${
            btnActive === 'report'
              ? 'bg-secondary justify-center'
              : 'text-[#CACACA] ml-10'
          }`}
        >
          <div className="flex items-center gap-2 w-24">
            <div className="w-4 h-4">
              <img src={iconReport} alt="icon-report" />
            </div>
            <p>Relatórios</p>
          </div>
        </button>
      </div>
      <div className="w-full flex flex-col items-center gap-8">
        <button className="w-28 h-4 flex gap-3 items-center rounded-md text-secondary">
          <div className="w-4 h-4">
            <img src={iconHelp} alt="icon-help" />
          </div>
          <p>Me ajuda!</p>
        </button>
        <Link to="/">
          <button className="w-28 h-7 flex gap-3 items-center rounded-md text-secondary">
            <div className="w-4 h-4">
              <img src={iconLogout} alt="icon-loggout" />
            </div>
            <p>Sair!</p>
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Sidebar
