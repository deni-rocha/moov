import React from 'react'

const PainelControlTrip = (): JSX.Element => {
  return (
    <div className=" w-full pl-10">
      <div className="max-w-[1105px] border-2 items-center gap-80 border-red-600 h-[83px] flex">
        <div className="w-7/12 border-2 border-green-700">
          <p>Pesquisar</p>
          <input type="text" name="search" className="w-full" />
        </div>
        <button className="bg-secondary text-white w-44 h-9 rounded-md">
          pesquisar
        </button>
      </div>
    </div>
  )
}

export default PainelControlTrip
