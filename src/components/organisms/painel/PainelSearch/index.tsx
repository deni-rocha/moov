import React, { useContext } from 'react'
import SVGPainelSearch from '../../../../assets/painel/painelSearch/SVGPainelSearch'
import { SearchListContext } from '../../../../contexts/searchList/SearchListContext'
import Input from '../../../atoms/Input'

interface Props {
  title: string
  hasButton: boolean
}
const PainelSearch = ({ title, hasButton }: Props): JSX.Element => {
  const { inputValue, setInputValue } = useContext(SearchListContext)
  return (
    <div className="max-w-[1105px] border-2 items-center p-4 justify-between rounded-md border-zinc-300 flex">
      <div className=" w-full">
        <p className="pb-2">{title}</p>
        <div className="relative  max-w-[480px]">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
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
      {hasButton ? (
        <button className="bg-secondary text-white ml-4 w-44 h-9 rounded-md relative drop-shadow-md">
          <p>pesquisar</p>
          <SVGPainelSearch
            className="absolute w-4 top-1 left-4"
            fill={'#BEBEBE'}
            width={24}
            height={34}
          />
        </button>
      ) : (
        ''
      )}
    </div>
  )
}
export default PainelSearch
