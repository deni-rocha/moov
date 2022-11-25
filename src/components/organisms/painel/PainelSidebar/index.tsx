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
import SVGCollapsedLogo from '../../../../assets/painel/sidebar/collapsed/SVGCollapsedLogo'

const Sidebar = (): JSX.Element => {
  const { setSigned } = useContext(AuthContext)
  const [btnActive, setBtnActive] = useState('')
  const [isExpanded, setIsExpanded] = useState(true)

  function handleActiveBtn(value: string): void {
    setBtnActive(value)
  }

  function reportWindowSize(): void {
    const windowSize = window.innerWidth
    if (windowSize <= 640) {
      setIsExpanded(false)
    } else {
      setIsExpanded(true)
    }
  }
  window.onresize = reportWindowSize
  return (
    <section
      className={`${
        isExpanded ? ' w-4/12 max-w-[258px] ' : 'w-[140px]'
      } py-8 flex gap-20 flex-col border-r-2 border-r-zinc-300`}
    >
      <div
        className={`w-full flex flex-col font-lato gap-5 ${
          isExpanded ? '' : 'items-center'
        }`}
      >
        <button
          className="w-7 h-7 mb-2 hover:contrast-75"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <img src={iconToggleClose} alt="fechar-sidebar" />
          ) : (
            <img src={iconToggleOpen} alt="abrir-sidebar" />
          )}
        </button>
        <div className={`w-52 h-14 ${isExpanded ? '' : 'flex justify-center'}`}>
          {isExpanded ? (
            <img src={iconLogo} alt="logo" />
          ) : (
            <SVGCollapsedLogo />
          )}
        </div>
        <PainelBtn
          isExpanded={isExpanded}
          className={`${isExpanded ? 'items-stretch' : 'justify-center'}`}
        >
          <div className="relative w-12">
            <div className="absolute left-0">
              <img src={perfil} alt="perfil" />
              <div className="absolute top-7 right-1">
                <img src={iconOnline} alt="online" />
              </div>
            </div>
          </div>
          <div className={`${isExpanded ? '' : 'hidden'}`}>
            <p className="text-md font-extrabold ">Maria Santos</p>
            <p className="text-sm ">Administrativo</p>
          </div>
        </PainelBtn>
        <PainelBtn
          isExpanded={isExpanded}
          onClick={() => handleActiveBtn('controlTrip')}
          className={`text-white items-center ${
            btnActive === 'controlTrip'
              ? 'bg-secondary font-bold justify-center'
              : 'text-[#CACACA] hover:contrast-0 font-lato'
          }
          ${isExpanded ? '' : 'justify-center w-32'}
          `}
        >
          <SVGControlTrip width={15} height={16} fill="#CACACA" />
          <p className={`${isExpanded ? '' : 'hidden'}`}>Controle de viagens</p>
        </PainelBtn>

        <PainelBtn
          isExpanded={isExpanded}
          onClick={() => handleActiveBtn('register')}
          className={`flex-col gap-2 p-2 rounded-md text-white relative ${
            btnActive === 'register'
              ? 'bg-secondary h-48 font-bold'
              : 'text-[#CACACA] h-14 hover:contrast-0'
          }
          ${isExpanded ? '' : 'items-center'}

          ${isExpanded && btnActive === 'register' ? 'pl-6' : ''}
          `}
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4">
              <img src={iconEdit} alt="edit-icon" />
            </div>
            <p className={`${isExpanded ? '' : 'hidden'}`}>Cadastráveis</p>
          </div>
          <ul
            className={`flex flex-col gap-3 items-start absolute top-9 ${
              btnActive === 'register' ? 'flex font-normal' : 'hidden'
            }
            ${isExpanded ? 'ml-6' : 'ml-0 items-center'}
            `}
          >
            <li>Usuários</li>
            <li>Setores</li>
            <li>Tipo de despesa</li>
            <li>Aprovação</li>
          </ul>
        </PainelBtn>
        <PainelBtn
          isExpanded={isExpanded}
          onClick={() => handleActiveBtn('report')}
          className={`rounded-md text-white ${
            btnActive === 'report'
              ? 'bg-secondary justify-center'
              : 'text-[#CACACA] hover:contrast-0'
          }
          ${isExpanded ? '' : 'justify-center'}
          `}
        >
          <div
            className={`flex items-center gap-2 w-24 ${
              isExpanded ? '' : 'justify-center'
            }`}
          >
            <div className="w-4 h-4">
              <img src={iconReport} alt="icon-report" />
            </div>
            <p className={`${isExpanded ? '' : 'hidden'}`}>Relatórios</p>
          </div>
        </PainelBtn>
        <PainelBtn
          isExpanded={isExpanded}
          className={`h-7 flex gap-3 mt-36 items-center text-secondary ${
            isExpanded ? '' : 'justify-center'
          }`}
        >
          <div className="w-4 h-4">
            <img src={iconHelp} alt="icon-help" />
          </div>
          <p className={`${isExpanded ? '' : 'hidden'}`}>Me ajuda!</p>
        </PainelBtn>
        <Link
          onClick={() => {
            sessionStorage.clear()
            setSigned(false)
          }}
          to="/"
        >
          <PainelBtn
            isExpanded={isExpanded}
            className={`h-7 flex gap-3 items-center text-secondary ${
              isExpanded ? '' : 'justify-center'
            }`}
          >
            <div className="w-4 h-4">
              <img src={iconLogout} alt="icon-loggout" />
            </div>
            <p className={`${isExpanded ? '' : 'hidden'}`}>Sair!</p>
          </PainelBtn>
        </Link>
      </div>
    </section>
  )
}

export default Sidebar
