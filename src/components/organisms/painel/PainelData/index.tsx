import React from 'react'
import SVGPainelDataExclamation from '../../../../assets/painel/painelData/SVGPainelDataExclamation'

const PainelData = (): JSX.Element => {
  return (
    <div className=" w-full pt-4 border-2 border-red-500 font-inter">
      <nav className="">
        <ul className="border-2 border-green-500 flex gap-8 text-disabled font-bold uppercase text-sm">
          <li className="flex items-center gap-2 ">
            {' '}
            <SVGPainelDataExclamation
              className=""
              width={18}
              height={18}
            />{' '}
            solicitação de adiantamento
          </li>
          <li>viagens em andamento</li>
          <li>viagens finalizadas</li>
        </ul>
      </nav>
      <div className="border-2 border-yellow-500">
        <h1>Painel Data</h1>
      </div>
    </div>
  )
}

export default PainelData
