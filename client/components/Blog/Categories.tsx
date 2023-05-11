import { useRouter } from 'next/router'
import { useState } from 'react'

import { ICategory } from '@/types/category.type'
import useCategories from '@/hooks/useCategories'

import CategoryButton from './CategoryButton'

import { SwiperSlide, Swiper as SwiperWrapper } from 'swiper/react'
import Swiper, { A11y, Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import SwiperButton from '../AllPages/SwiperButton'

interface CategoriesProps {
  slug?: string
  search?: string
}

const Categories: React.FC<CategoriesProps> = ({ slug, search }) => {
  const router = useRouter()
  const { data: category } = useCategories()

  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const handleCategory = (categorySlug: string) => {
    router.push({
      pathname: '/blogs',
      query: { ...router.query, category: categorySlug }
    })
  }

  const handleAll = () => {
    if (search) {
      delete router.query.category
      return router.push({
        pathname: '/blogs',
        query: { ...router.query }
      })
    }
    router.push('/blogs')
  }

  const handleSlide = (swiper: Swiper) => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  return (
    <div className="mt-16 md:mt-20 xl:mt-24">
      <SwiperWrapper
        modules={[Pagination, Navigation, A11y]}
        slidesPerView={'auto'}
        spaceBetween={18}
        grabCursor={category && category.data.length > 10}
        onSlideChange={(swiper) => handleSlide(swiper)}
        className="structure relative font-semibold text-font-black"
      >
        {!isBeginning && (
          <div className="category-bg-2 absolute inset-y-0 left-0 z-10 flex w-16 pl-1">
            <SwiperButton variant="prev" className="my-auto mr-auto h-8 w-8" />
          </div>
        )}

        <SwiperSlide>
          <CategoryButton active={!slug} onClick={handleAll}>
            Semua
          </CategoryButton>
        </SwiperSlide>

        {category &&
          category.data.map((category: ICategory) => (
            <SwiperSlide key={category.id}>
              <CategoryButton
                active={slug === category.attributes.slug}
                onClick={() => handleCategory(category.attributes.slug)}
              >
                {category.attributes.nama}
              </CategoryButton>
            </SwiperSlide>
          ))}

        {!isEnd && (
          <div
            className={`category-bg absolute inset-y-0 right-0 z-10 flex w-10 pr-1 md:w-16 ${
              category?.data?.length < 10 && 'md:hidden'
            }`}
          >
            <SwiperButton variant="next" className="my-auto ml-auto h-6 w-6 md:h-8 md:w-8" />
          </div>
        )}
      </SwiperWrapper>
    </div>
  )
}

export default Categories
