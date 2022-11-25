import React, { useContext, useState } from 'react'
import iconToggleClose from '../../../../assets/painel/sidebar/icon-toggle-close.svg'
import iconToggleOpen from '../../../../assets/painel/sidebar/icon-toggle-open.svg'
import iconLogo from '../../../../assets/painel/sidebar/icon-logo.svg'
import perfil from '../../../../assets/painel/sidebar/perfil.png'
import iconOnline from '../../../../assets/painel/sidebar/icon-online.svg'
import iconEdit from '../../../../assets/painel/sidebar/icon-edit.svg'
import iconReport from '../../../../assets/painel/sidebar/icon-report.svg'
import iconHelp from '../../../../assets/painel/sidebar/icon-help.svg'
import iconLogout from '../../../../assets/painel/sidebar/icon-logout.svg'
import { Link } from 'react-router-dom'
import SVGControlTrip from '../../../../assets/painel/sidebar/ControlTrip'
import AuthContext from '../../../../contexts/auth'
import PainelBtn from '../../../molecules/painel/PainelBtn'

const Sidebar = (): JSX.Element => {
  const { setSigned } = useContext(AuthContext)
  const [btnActive, setBtnActive] = useState('')
  const [btnToggle, setBtnToggle] = useState(true)

  function handleActiveBtn(value: string): void {
    setBtnActive(value)
  }

  return (
    <section className="w-4/12 max-w-[258px] flex gap-20 flex-col border-r-2 border-r-zinc-300">
      <div className="w-full flex flex-col font-lato gap-5">
        <button
          className="w-7 h-7 mb-2 hover:contrast-0"
          onClick={() => setBtnToggle(!btnToggle)}
        >
          {/* trocar o svg porque o background está camuflando o vetor */}
          {btnToggle ? (
            <img src={iconToggleClose} alt="fechar-sidebar" />
          ) : (
            <img src={iconToggleOpen} alt="abrir-sidebar" />
          )}
        </button>
        <div className="w-52 h-14">
          <img src={iconLogo} alt="logo" />
        </div>
        <PainelBtn className={'items-stretch'}>
          <div className="relative w-12">
            <div className="absolute left-0">
              <img src={perfil} alt="perfil" />
              <div className="absolute top-7 right-1">
                <img src={iconOnline} alt="online" />
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-md font-extrabold ">Maria Santos</p>
            <p className="text-sm ">Administrativo</p>
          </div>
        </PainelBtn>
        <PainelBtn
          onClick={() => handleActiveBtn('controlTrip')}
          className={`text-white items-center ${
            btnActive === 'controlTrip'
              ? 'bg-secondary font-bold'
              : 'text-[#CACACA] hover:contrast-0 font-lato'
          }`}
        >
          <SVGControlTrip width={15} height={16} fill="#CACACA" />
          <p>Controle de viagens</p>
        </PainelBtn>

        <PainelBtn
          onClick={() => handleActiveBtn('register')}
          className={`flex-col gap-2 p-2 rounded-md text-white relative ${
            btnActive === 'register'
              ? 'bg-secondary h-48 font-bold'
              : 'text-[#CACACA] h-14 justify-center hover:contrast-0'
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4">
              <img src={iconEdit} alt="edit-icon" />
            </div>
            <p>Cadastráveis</p>
          </div>
          <ul
            className={`ml-6 flex flex-col gap-3 items-start absolute top-9 ${
              btnActive === 'register' ? 'flex font-normal' : 'hidden'
            }`}
          >
            <li>Usuários</li>
            <li>Setores</li>
            <li>Tipo de despesa</li>
            <li>Aprovação</li>
          </ul>
        </PainelBtn>
        <PainelBtn
          onClick={() => handleActiveBtn('report')}
          className={`rounded-md text-white ${
            btnActive === 'report'
              ? 'bg-secondary justify-center'
              : 'text-[#CACACA] hover:contrast-0'
          }`}
        >
          <div className="flex items-center gap-2 w-24">
            <div className="w-4 h-4">
              <img src={iconReport} alt="icon-report" />
            </div>
            <p>Relatórios</p>
          </div>
        </PainelBtn>
        <PainelBtn className="h-7 flex gap-3 mt-36 items-center text-secondary">
          <div className="w-4 h-4">
            <img src={iconHelp} alt="icon-help" />
          </div>
          <p>Me ajuda!</p>
        </PainelBtn>
        <Link
          onClick={() => {
            sessionStorage.clear()
            setSigned(false)
          }}
          to="/"
        >
          <PainelBtn className="h-7 flex gap-3 items-center text-secondary">
            <div className="w-4 h-4">
              <img src={iconLogout} alt="icon-loggout" />
            </div>
            <p>Sair!</p>
          </PainelBtn>
        </Link>
      </div>
    </section>
  )
}

export default Sidebar
