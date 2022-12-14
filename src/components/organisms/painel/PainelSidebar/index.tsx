import React, { useContext, useEffect, useState } from 'react'
import perfil from '../../../../assets/painel/sidebar/perfil.png'
import iconOnline from '../../../../assets/painel/sidebar/icon-online.svg'
import iconEdit from '../../../../assets/painel/sidebar/icon-edit.svg'
import iconReport from '../../../../assets/painel/sidebar/icon-report.svg'
import iconHelp from '../../../../assets/painel/sidebar/icon-help.svg'
import iconLogout from '../../../../assets/painel/sidebar/icon-logout.svg'
import { Link } from 'react-router-dom'
import SVGControlTrip from '../../../../assets/painel/sidebar/ControlTrip'
import AuthContext from '../../../../contexts/auth/AuthContext'
import PainelBtn from '../../../molecules/painel/PainelBtn'
import SVGCollapsedLogo from '../../../../assets/painel/sidebar/collapsed/SVGCollapsedLogo'
import verifyWindowSize from '../../../../utils/verifyWindowSize'
import SvgToggleOpen from '../../../../assets/painel/sidebar/SvgToggleOpen'
import SvgToggleClose from '../../../../assets/painel/sidebar/SvgToggleClose'
import SvgIcon from '../../../../assets/painel/sidebar/SvgIcon'
import PainelContext from '../../../../contexts/painel'

const Sidebar = (): JSX.Element => {
  const { state, dispatch } = useContext(PainelContext)
  const { registerBtnActive } = state.register
  const { user, logout } = useContext(AuthContext)
  const [btnActive, setBtnActive] = useState('')
  const [isExpanded, setIsExpanded] = useState(true)
  const { nome, email } = user

  function handleActiveBtn(value: string): void {
    switch (value) {
      case 'controlTrip': {
        dispatch({
          type: 'CHANGE_TEXT_HEADER',
          payload: {
            title: 'Painel de controle de viagens',
            subTitle: 'Controle de viagens'
          }
        })
        dispatch({
          type: 'SIDEBAR_CHANGE_BTN',
          payload: {
            btnActive: value
          }
        })
        break
      }

      case 'register': {
        dispatch({
          type: 'CHANGE_TEXT_HEADER',
          payload: { subTitle: 'Cadastráveis', title: '' }
        })
        dispatch({ type: 'SIDEBAR_CHANGE_BTN', payload: { btnActive: value } })
        break
      }

      case 'report': {
        dispatch({
          type: 'CHANGE_TEXT_HEADER',
          payload: { subTitle: 'análise de dados', title: 'Relatórios' }
        })
        dispatch({ type: 'SIDEBAR_CHANGE_BTN', payload: { btnActive: value } })
        break
      }
    }

    setBtnActive(value)
  }

  useEffect(() => {
    setIsExpanded(verifyWindowSize)
    window.onresize = () => {
      setIsExpanded(verifyWindowSize)
    }
  }, [])

  return (
    <section
      className={`${
        isExpanded ? 'w-[258px] ' : 'w-[140px]'
      } transition-all duration-500 py-8 flex gap-20 flex-col border-r-2 border-r-zinc-300`}
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
          {isExpanded ? <SvgToggleClose /> : <SvgToggleOpen />}
        </button>
        <div
          className={`w-52 h-14 transition-all duration-1000 ${
            isExpanded ? '' : 'flex justify-center'
          }`}
        >
          {isExpanded ? <SvgIcon /> : <SVGCollapsedLogo />}
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
          <div className={`truncate ${isExpanded ? '' : 'hidden'}`}>
            <p className="text-sm font-extrabold ">{nome}</p>
            <p className="text-sm ">{email}</p>
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
          className={`flex-col gap-2 mr-2 p-2 rounded-md text-white relative ${
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
            <li
              className={`hover:bg-[#848484] hover:p-1 rounded-md ${
                registerBtnActive === 'usuários' ? 'bg-[#2E2D2D] p-1' : ''
              }`}
              onClick={() => {
                dispatch({ type: 'REGISTER_CHANGE_BTN', payload: 'usuários' })
              }}
            >
              Usuários
            </li>
            <li
              className={`hover:bg-[#848484] hover:p-1 rounded-md ${
                registerBtnActive === 'setores' ? 'bg-[#2E2D2D] p-1' : ''
              }`}
              onClick={() => {
                dispatch({ type: 'REGISTER_CHANGE_BTN', payload: 'setores' })
              }}
            >
              Setores
            </li>
            <li
              className={`hover:bg-[#848484] hover:p-1 rounded-md ${
                registerBtnActive === 'tipo de despesa'
                  ? 'bg-[#2E2D2D] p-1'
                  : ''
              }`}
              onClick={() => {
                dispatch({
                  type: 'REGISTER_CHANGE_BTN',
                  payload: 'tipo de despesa'
                })
              }}
            >
              Tipo de despesa
            </li>
            <li
              className={`hover:bg-[#848484] hover:p-1 rounded-md ${
                registerBtnActive === 'aprovação' ? 'bg-[#2E2D2D] p-1' : ''
              }`}
              onClick={() => {
                dispatch({ type: 'REGISTER_CHANGE_BTN', payload: 'aprovação' })
              }}
            >
              Aprovação
            </li>
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
            logout()
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
