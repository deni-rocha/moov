import React, { useEffect } from 'react'
import PainelHeader from '../../organisms/painel/PainelHeader'
import PainelSidebar from '../../organisms/painel/PainelSidebar'
import PainelSearch from '../../organisms/painel/PainelSearch'
import PainelData from '../../organisms/painel/PainelData'
import Swal from 'sweetalert2'

export function alertSucess(): void {
  void Swal.fire({
    background: '#ffffff',
    width: '300px',
    title: 'conectado',
    position: 'top-end',
    icon: 'success',
    showConfirmButton: false,
    timer: 1500
  })
}

const PainelTemplate = (): JSX.Element => {
  useEffect(() => {
    alertSucess()
  }, [])
  return (
    <div className="w-11/12 max-w-[1181px] py-4 flex">
      <PainelSidebar />
      <section className="grow p-2 flex flex-col">
        <PainelHeader
          subTitle="Controle de viagens"
          tittle="Painel de controle de viagens"
        />
        <div className=" w-full pl-10 pt-4">
          <PainelSearch />
          <PainelData />
        </div>
      </section>
    </div>
  )
}

export default PainelTemplate
