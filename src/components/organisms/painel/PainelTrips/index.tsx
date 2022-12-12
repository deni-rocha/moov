import React, { useState, useEffect } from 'react'
import { getSolicitation } from '../../../../services/api'
import getFinished from '../../../../services/api/trips/finished'
import getHappening from '../../../../services/api/trips/happening'
import SVGPainelDataCorrect from '../../../../assets/painel/painelData/SVGPainelDataCorrect'
import SVGPainelDataExclamation from '../../../../assets/painel/painelData/SVGPainelDataExclamation'
import SVGPainelDataHome from '../../../../assets/painel/painelData/SVGPainelDataHome'
import {
  IApiAndamento,
  IApiFinalizada,
  IApiSolicitacao
} from '../../../../types/InterfaceApi'
import PainelTripsNavLi from '../../../molecules/painel/PainelTripsNavLi'
import PainelSearch from '../PainelSearch'

const PainelTrips = (): JSX.Element => {
  const [btnActive, setBtnActive] = useState('')
  const [tripSolicitationList, setTripSolicitationList] = useState<
    IApiSolicitacao[] | []
  >([])
  const [tripHappeningList, setTripHappeningList] = useState<
    IApiAndamento[] | []
  >([])
  const [tripFinishedList, setTripFinishedList] = useState<
    IApiFinalizada[] | []
  >([])

  const isTripSolicitation = btnActive === 'trip solicitation'
  const isTripHappening = btnActive === 'trip happening'
  const isTripFinished = btnActive === 'trip finished'

  useEffect(() => {
    const fetch = async (): Promise<[]> => {
      switch (btnActive) {
        case 'trip solicitation': {
          const res = await getSolicitation()
          setTripSolicitationList(res)
          break
        }
        case 'trip happening': {
          const res = await getHappening()
          setTripHappeningList(res)
          break
        }
        case 'trip finished': {
          const res = await getFinished()
          setTripFinishedList(res)
          break
        }
      }
      return []
    }

    void fetch()
  }, [btnActive])

  return (
    <>
      <PainelSearch title="Pesquisar" hasButton={true} />
      <div className=" w-full pt-4 mt-4 font-inter">
        <nav className="">
          <ul
            className={`border-b-2 pb-3 text-disabled flex gap-8 font-bold uppercase text-xs `}
          >
            <PainelTripsNavLi
              btnId="trip solicitation"
              btnActive={btnActive}
              setBtnActive={setBtnActive}
            >
              <SVGPainelDataExclamation
                className={`${
                  isTripSolicitation ? 'fill-secondary' : 'fill-disabled'
                }`}
                width={13}
                height={13}
              />
              solicitação de adiantamento
            </PainelTripsNavLi>
            <PainelTripsNavLi
              btnId="trip happening"
              btnActive={btnActive}
              setBtnActive={setBtnActive}
            >
              <SVGPainelDataCorrect
                className={`${
                  isTripHappening ? 'fill-secondary' : 'fill-disabled'
                }`}
                width={13}
                height={13}
              />
              viagens em andamento
            </PainelTripsNavLi>
            <PainelTripsNavLi
              btnId="trip finished"
              btnActive={btnActive}
              setBtnActive={setBtnActive}
            >
              <SVGPainelDataHome
                className={`${
                  isTripFinished ? 'fill-secondary' : 'fill-disabled'
                }`}
                width={20}
                height={13}
              />
              viagens finalizadas
            </PainelTripsNavLi>
          </ul>
        </nav>
        <div className="mt-8">
          {/* <ul className="flex">
          <li>Nome</li>
          <li>E-mail</li>
          <li>Setor</li>
          <li>Função</li>
          <li>Data</li>
        </ul> */}
          {isTripSolicitation
            ? tripSolicitationList.map((obj, index) => {
                return (
                  <div key={index}>
                    <ul className="flex gap-10">
                      <li>{obj.nome}</li>
                      <li>{obj.email}</li>
                      <li>{obj.setor}</li>
                      <li>{obj.funcao}</li>
                      <li>{obj.data}</li>
                    </ul>
                  </div>
                )
              })
            : ''}
          {isTripHappening
            ? tripHappeningList.map((obj, index) => {
                return (
                  <div key={index}>
                    <ul className="flex gap-10">
                      <li>{obj.titulo}</li>
                      <li>{obj.descricao}</li>
                      <li>{obj.remetente}</li>
                      <li>{obj.funcao}</li>
                      <li>{obj.data}</li>
                      <li>{obj.tipo}</li>
                    </ul>
                  </div>
                )
              })
            : ''}
          {isTripFinished
            ? tripFinishedList.map((obj, index) => {
                return (
                  <div key={index}>
                    <ul className="flex gap-10">
                      <li>{obj.titulo}</li>
                      <li>{obj.descricao}</li>
                      <li>{obj.remetente}</li>
                      <li>{obj.funcao}</li>
                      <li>{obj.data}</li>
                      <li>{obj.tipo}</li>
                    </ul>
                  </div>
                )
              })
            : ''}
        </div>
      </div>
    </>
  )
}

export default PainelTrips
