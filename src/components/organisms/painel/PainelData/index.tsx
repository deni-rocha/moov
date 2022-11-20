import React, { useState } from 'react'
import SVGPainelDataCorrect from '../../../../assets/painel/painelData/SVGPainelDataCorrect'
import SVGPainelDataExclamation from '../../../../assets/painel/painelData/SVGPainelDataExclamation'
import SVGPainelDataHome from '../../../../assets/painel/painelData/SVGPainelDataHome'
import PainelDataNavLi from '../../../molecules/painel/PainelDataNavLi'

const PainelData = (): JSX.Element => {
  const [btnActive, setBtnActive] = useState('')

  return (
    <div className=" w-full pt-4 mt-4 font-inter">
      <nav className="">
        <ul
          className={`border-b-2 pb-3 text-disabled flex gap-8 font-bold uppercase text-xs `}
        >
          <PainelDataNavLi
            btnId="solicitation"
            btnActive={btnActive}
            setBtnActive={setBtnActive}
          >
            <SVGPainelDataExclamation
              className={`${
                btnActive === 'solicitation'
                  ? 'fill-secondary'
                  : 'fill-disabled'
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
                btnActive === 'trip happening'
                  ? 'fill-secondary'
                  : 'fill-disabled'
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
                btnActive === 'trip finished'
                  ? 'fill-secondary'
                  : 'fill-disabled'
              }`}
              width={20}
              height={13}
            />
            viagens finalizadas
          </PainelDataNavLi>
        </ul>
      </nav>
      <div className="mt-8 border-2 border-yellow-500">
        <h1>Painel Data</h1>
      </div>
    </div>
  )
}

export default PainelData
