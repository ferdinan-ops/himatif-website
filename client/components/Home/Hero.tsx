import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, type Swiper as SwiperRef } from 'swiper'

import { IBlogData } from '@/types/blog.type'
import { formatDateHero } from '@/lib/formatDate'
import Container from '../AllPages/Container'

import 'swiper/css'
import 'swiper/css/effect-fade'

interface HeroProps {
  blogs: IBlogData[]
}

const Hero: React.FC<HeroProps> = ({ blogs }) => {
  const [realSlide, setRealSlide] = useState<number>(0)
  const swiperRef = useRef<SwiperRef>()

  const handleSlideTo = (index: number) => {
    if (swiperRef && swiperRef.current && swiperRef.current.slideTo) {
      swiperRef.current.slideTo(index + 1)
    }
  }

  return (
    <section className="relative min-h-screen font-sans">
      <SwiperComponent
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={(s) => setRealSlide(s.realIndex)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className="absolute z-0 flex h-full w-full">
              <div className="relative h-full w-full">
                <Image
                  src={blog.attributes.thumbnail.data.attributes.url}
                  alt={blog.attributes.thumbnail.data.attributes.caption || ''}
                  fill
                  className="object-cover brightness-[.40]"
                />
              </div>
            </div>
            <Container className="relative flex min-h-screen w-full pb-[56px] pt-20 md:pb-[70px]">
              <div className="mt-auto flex flex-col gap-2 text-white md:gap-4">
                <button className="w-fit rounded-lg bg-white/25 px-2 py-1 text-[10px] font-semibold uppercase hover:bg-white/40 md:px-4 md:py-2 md:text-xs md:font-semibold">
                  {blog.attributes.kategori.data.attributes.nama}
                </button>
                <h1 className="max-w-[530px] text-2xl font-bold leading-[38px] md:text-4xl md:leading-[48px]">
                  {blog.attributes.judul}
                </h1>
                <div className="flex flex-col items-start gap-3 text-xs text-white/80 md:flex-row md:text-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-[2px] w-16 bg-white/80 md:hidden"></div>
                    <span>{formatDateHero(blog.attributes.tanggal)}</span>
                    <div className="h-[2px] w-16 bg-white/80"></div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="truncate-lines max-w-[420px]">{blog.attributes.deskripsi}</p>
                    <Link
                      href={`/blogs/${blog.attributes.slug}`}
                      className="relative w-fit pb-3 font-semibold after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[52%] after:bg-white after:transition-all after:content-[''] hover:text-white hover:after:w-full"
                    >
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
                <div className="mx-auto flex gap-3 pt-14 md:mx-0 md:pt-16">
                  {blogs.map((item, i) => (
                    <span
                      key={item.id}
                      className={[
                        'h-2 w-2 cursor-pointer rounded-full md:h-3 md:w-3',
                        i === realSlide ? 'bg-white' : 'bg-white/30'
                      ].join(' ')}
                      onClick={() => i !== realSlide && handleSlideTo(i)}
                    />
                  ))}
                </div>
              </div>
            </Container>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </section>
  )
}

export default Hero
