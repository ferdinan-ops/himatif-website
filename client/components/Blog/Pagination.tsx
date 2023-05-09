import ReactPaginate from 'react-paginate'
import PaginationLabel from './PaginationLabel'

interface PaginationProps {
  setCurrentPage: (value: number) => void
  currentPage: number
  totalPages: number
}

const Pagination: React.FC<PaginationProps> = ({ setCurrentPage, currentPage, totalPages }) => {
  const showNextButton = currentPage !== Math.round(totalPages)
  const showPrevButton = currentPage !== 1

  return (
    <div>
      <ReactPaginate
        onPageChange={({ selected }) => setCurrentPage(selected + 1)}
        pageRangeDisplayed={3}
        pageCount={Math.round(totalPages)}
        previousLabel={showPrevButton ? <PaginationLabel isLeft /> : null}
        nextLabel={showNextButton ? <PaginationLabel isLeft={false} /> : null}
        breakLabel={<span className='mr-4'>...</span>}
        containerClassName="container flex mx-auto justify-center mb-20 gap-3 md:gap-5 md:text-base text-sm"
        pageClassName='block w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg cursor-pointer hover:bg-primary/20'
        activeClassName='bg-primary text-white font-bold active-paginate'
      />
    </div>
  )
}

export default Pagination
