import React from 'react'
import SVGPainelSearch from '../../../../assets/painel/painelSearch/SVGPainelSearch'
import Input from '../../../atoms/Input'

const PainelSearch = (): JSX.Element => {
  return (
    <div className="max-w-[1105px] border-2 items-center p-4 justify-between rounded-md border-zinc-300 flex">
      <div className=" w-full">
        <p className="pb-2">Pesquisar</p>
        <div className="relative  max-w-[480px]">
          <Input
            type="text"
            name="search"
            className="bg-[#f7f9fb] border-2"
            placeholder=""
          />

          <SVGPainelSearch
            fill={'#BEBEBE'}
            width={24}
            height={27}
            className="absolute top-1 right-1"
          />
        </div>
      </div>
      <button className="bg-secondary text-white ml-4 w-44 h-9 rounded-md relative drop-shadow-md">
        <p>pesquisar</p>
        <SVGPainelSearch
          className="absolute w-4 top-1 left-4"
          fill={'#BEBEBE'}
          width={24}
          height={34}
        />
      </button>
    </div>
  )
}
export default PainelSearch
