import React from 'react'
import SvgArrowLeft from '../../../assets/pagination/SvgArrowLeft'
import SvgArrowRight from '../../../assets/pagination/SvgArrowRight'
import { usePagination, DOTS } from '../../../hooks/usePagination'

interface Props {
  onPageChange: React.Dispatch<React.SetStateAction<number>>
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
}

const Pagination = (props: Props): JSX.Element | null => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize
  } = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = (): void => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = (): void => {
    onPageChange(currentPage - 1)
  }

  const paginationItem = `px-3 h-8 text-center mx-auto my-1 text-black flex box-border items-center
  tracking-tighter rounded-2xl leading-3 text-xs min-w-[32px] hover:bg-gray-300`

  const lastPage = paginationRange[paginationRange.length - 1]
  return (
    <ul className="flex list-none">
      <li
        className={`${paginationItem} ${
          currentPage === 1 ? 'pointer-events-none' : ''
        }`}
        onClick={onPrevious}
      >
        <div className={` ${currentPage === 1 ? 'opacity-40' : ''}`}>
          <SvgArrowLeft />
        </div>
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li
              key={index}
              className={`${paginationItem} text-red-500 hover:bg-transparent hover:cursor-default`}
            >
              &#8230;
            </li>
          )
        }

        return (
          <li
            key={index}
            className={`${paginationItem} ${
              pageNumber === currentPage ? 'bg-gray-300' : ''
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        )
      })}
      <li
        className={`${paginationItem} ${
          currentPage === lastPage ? 'pointer-events-none' : ''
        }`}
        onClick={onNext}
      >
        <div className={`${currentPage === lastPage ? 'opacity-40' : ''}`}>
          <SvgArrowRight />
        </div>
      </li>
    </ul>
  )
}

export default Pagination
