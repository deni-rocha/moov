import React from 'react'
import iconSearch from '../../../../assets/painel/painelSearch/icon-search.svg'

const PainelSearch = (): JSX.Element => {
  return (
    <div className="max-w-[1105px] border-2 items-center p-4 justify-between rounded-md border-zinc-300 h-[83px] flex">
      <div className="w-96">
        <p className="pb-2">Pesquisar</p>
        <div className="relative">
          <input
            type="text"
            name="search"
            className="w-full outline-none rounded-md h-7"
          />
          <div className="absolute top-1 right-0 ">
            <img src={iconSearch} alt="icon-search" />
          </div>
        </div>
      </div>
      <button className="bg-secondary text-white w-44 h-9 rounded-md relative drop-shadow-md">
        <p>pesquisar</p>
        <div className="absolute w-4 top-3 left-8">
          <img src={iconSearch} alt="icon-search" />
        </div>
      </button>
    </div>
  )
}
export default PainelSearch
