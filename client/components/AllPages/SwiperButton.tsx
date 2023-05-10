import { HiChevronRight, HiChevronLeft } from "react-icons/hi2"
import { useSwiper } from "swiper/react"

interface SwiperButtonProps {
  className: string,
  variant: 'prev' | 'next'
}

const SwiperButton: React.FC<SwiperButtonProps> = ({ className, variant }) => {
  const swiper = useSwiper()
  const iconStyle = 'm-auto text-sm md:text-base'

  const handleSwipe = () => {
    if (variant === 'prev') {
      swiper.slidePrev()
      return
    }
    swiper.slideNext()
  }

  return (
    <button className={'flex rounded-full hover:bg-slate-200 ' + className} onClick={handleSwipe}>
      {variant === 'prev' ? <HiChevronLeft className={iconStyle} /> : <HiChevronRight className={iconStyle} />}
    </button>
  )
}

export default SwiperButton