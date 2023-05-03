import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const PaginationLabel: React.FC<{ isLeft: boolean }> = ({ isLeft }) => {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-primary/20">
      {isLeft ? <BsChevronLeft /> : <BsChevronRight />}
    </span>
  )
}

export default PaginationLabel
