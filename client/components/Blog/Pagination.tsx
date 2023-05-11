import ReactPaginate from 'react-paginate'
import { useRouter } from 'next/router'

import PaginationLabel from './PaginationLabel'

interface PaginationProps {
  totalPages: number
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const router = useRouter()
  const handlePageChange = (selected: number) => {
    router.push({
      pathname: '/blogs',
      query: { ...router.query, page: selected + 1 }
    })
  }

  return (
    <div>
      <ReactPaginate
        pageRangeDisplayed={3}
        pageCount={Math.round(totalPages)}
        onPageChange={({ selected }) => handlePageChange(selected)}
        previousLabel={<PaginationLabel variant="prev" />}
        nextLabel={<PaginationLabel variant="next" />}
        breakLabel={
          <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg hover:bg-primary/20 md:h-10 md:w-10">
            ...
          </span>
        }
        containerClassName="flex justify-center items-center mb-20 gap-3 md:gap-5 md:text-base text-sm"
        pageClassName="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg cursor-pointer hover:bg-primary/20"
        activeClassName="bg-primary text-white active-paginate"
      />
    </div>
  )
}

export default Pagination
