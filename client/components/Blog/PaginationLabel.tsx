import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

const PaginationLabel: React.FC<{ isLeft: boolean }> = ({ isLeft }) => {
  return (
    <span className="flex h-8 w-8 xl:h-10 xl:w-10 items-center justify-center rounded-full hover:bg-primary/20">
      {isLeft ? <HiChevronLeft /> : <HiChevronRight />}
    </span>
  )
}

export default PaginationLabel
