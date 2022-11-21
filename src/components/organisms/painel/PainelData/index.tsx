import React, { useState, useEffect } from 'react'
import { getSolicitation } from '../../../../api'
import getFinished from '../../../../api/trips/finished'
import getHappening from '../../../../api/trips/happening'
import SVGPainelDataCorrect from '../../../../assets/painel/painelData/SVGPainelDataCorrect'
import SVGPainelDataExclamation from '../../../../assets/painel/painelData/SVGPainelDataExclamation'
import SVGPainelDataHome from '../../../../assets/painel/painelData/SVGPainelDataHome'
import {
  IApiAndamento,
  IApiFinalizada,
  IApiSolicitacao
} from '../../../../types/InterfaceApi'
import PainelDataNavLi from '../../../molecules/painel/PainelDataNavLi'

const PainelData = (): JSX.Element => {
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
    <div className=" w-full pt-4 mt-4 font-inter">
      <nav className="">
        <ul
          className={`border-b-2 pb-3 text-disabled flex gap-8 font-bold uppercase text-xs `}
        >
          <PainelDataNavLi
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
          </PainelDataNavLi>
          <PainelDataNavLi
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
          </PainelDataNavLi>
          <PainelDataNavLi
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
          </PainelDataNavLi>
        </ul>
      </nav>
      <div className="mt-8">
        {isTripSolicitation
          ? tripSolicitationList.map((obj, index) => {
              return <h1 key={index}>{obj.nome}</h1>
            })
          : ''}
        {isTripHappening
          ? tripHappeningList.map((obj, index) => {
              return <h1 key={index}>{obj.titulo}</h1>
            })
          : ''}
        {isTripFinished
          ? tripFinishedList.map((obj, index) => {
              return <h1 key={index}>{obj.remetente}</h1>
            })
          : ''}
      </div>
    </div>
  )
}

export default PainelData
