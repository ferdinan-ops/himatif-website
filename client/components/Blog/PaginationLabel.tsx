import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

interface PaginationLabelProps {
  variant: 'prev' | 'next'
}

const PaginationLabel: React.FC<PaginationLabelProps> = ({ variant }) => {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-primary/20 md:h-10 md:w-10">
      {variant === 'prev' ? <HiChevronLeft /> : <HiChevronRight />}
    </span>
  )
}

export default PaginationLabel
