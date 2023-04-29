import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const PaginationLabel: React.FC<{ isLeft: boolean }> = ({ isLeft }) => {
  return (
    <span className="bg-slate-200 flex h-10 w-10 items-center justify-center rounded-md">
      {isLeft ? <BsChevronLeft /> : <BsChevronRight />}
    </span>
  )
}

export default PaginationLabel
