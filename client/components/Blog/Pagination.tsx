import ReactPaginate from 'react-paginate'
import PaginationLabel from './PaginationLabel'

interface PaginationProps {
  setCurrentPage: (value: number) => void
  currentPage: number
  totalPages: number
}

const Pagination: React.FC<PaginationProps> = ({ setCurrentPage, currentPage, totalPages }) => {
  const showNextButton = currentPage !== Math.round(totalPages) - 1
  const showPrevButton = currentPage !== 0

  return (
    <div>
      <ReactPaginate
        onPageChange={({ selected }) => {
          console.log({ selected });
          setCurrentPage(selected)
        }}
        pageRangeDisplayed={3}
        pageCount={Math.round(totalPages)}
        previousLabel={showPrevButton ? <PaginationLabel isLeft /> : null}
        nextLabel={showNextButton ? <PaginationLabel isLeft={false} /> : null}
        breakLabel={<span className='mr-4'>...</span>}
        containerClassName="container flex mx-auto justify-center mb-20 mt-14 gap-5"
        pageClassName='block border border-solid border-slate-200 w-10 h-10 flex items-center justify-center rounded-md cursor-pointer'
        activeClassName='bg-primary text-white font-bold border-primary hover:bg-primary'
      />

    </div>
  )
}

export default Pagination
