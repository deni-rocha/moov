import React from 'react'
import PainelDataNavLi from '../../../../molecules/painel/PainelDataNavLi'

const TipoDeDispesa = (): JSX.Element => {
  return (
    <div className={`w-full pt-4 mt-4 font-inter`}>
      <nav className="">
        <ul
          className={`border-b-2 pb-3 text-disabled flex gap-8 font-bold uppercase text-xs `}
        >
          <PainelDataNavLi btnId="tipo de despesa">
            <p>tipos de despesas cadastrados</p>
          </PainelDataNavLi>
        </ul>
      </nav>
      <h1>Tipo de Dispesa</h1>
    </div>
  )
}

export default TipoDeDispesa
