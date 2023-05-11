import { IMember } from '@/types/member.type'
import useMembers from '@/hooks/useMembers'

import SwiperButton from '../AllPages/SwiperButton'
import Card from './Card'

import { Swiper as SwiperWrapper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

interface DivisiProps {
  latestYear: string
  title: string
  slug: string
}

const Divisi: React.FC<DivisiProps> = ({ title, latestYear, slug }) => {
  const { data: members } = useMembers(latestYear, slug)

  return (
    <div className="flex flex-col font-title">
      <h1 className="mb-8 text-lg font-bold md:mb-10 md:text-2xl">{title}</h1>
      <SwiperWrapper
        modules={[Pagination, Navigation, A11y]}
        slidesPerView={'auto'}
        spaceBetween={28}
        grabCursor={true}
        className="structure"
      >
        {members &&
          members.data.map((member: IMember, idx: number) => (
            <SwiperSlide key={idx} className="card">
              <Card member={member} />
            </SwiperSlide>
          ))}
        {members && members.data.length > 4 && (
          <div className="mt-5 flex justify-end">
            <div className="flex gap-4 md:gap-5">
              <SwiperButton variant="prev" className="h-8 w-8 border border-slate-400 md:h-10 md:w-10" />
              <SwiperButton variant="next" className="h-8 w-8 border border-slate-400 md:h-10 md:w-10" />
            </div>
          </div>
        )}
      </SwiperWrapper>
    </div>
  )
}

export default Divisi
