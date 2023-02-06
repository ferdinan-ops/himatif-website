import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";

const Hero = ({ blogs }) => {
   const [realSlide, setRealSlide] = useState(0);
   const swiper = useRef();

   return (
      <section className="relative min-h-screen font-sans">
         <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            speed={1000}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            onSlideChange={(s) => setRealSlide(s.realIndex)}
            onSwiper={(s) => (swiper.current = s)}
         >
            {blogs.map((blog, index) => (
               <SwiperSlide key={index}>
                  <div className="absolute z-0 flex h-full w-full bg-[#343A40]">
                     <div className="relative h-full w-full">
                        <Image src={blog.img} alt="" fill="fill" className="object-cover brightness-50" />
                     </div>
                  </div>
                  <div className="container relative mx-auto flex min-h-screen w-full px-6 pt-20 pb-[56px] md:pb-[70px] xl:px-0">
                     <div className="mt-auto flex flex-col gap-2 text-white md:gap-4">
                        <button className="w-fit rounded-lg bg-white/25 px-2 py-1 font-logo text-[10px] font-medium uppercase hover:bg-white/40 md:px-4 md:py-2 md:text-xs md:font-semibold">
                           {blog.tag}
                        </button>
                        <h1 className="max-w-[530px] text-2xl font-bold leading-[38px] md:text-4xl md:leading-[48px]">
                           {blog.title}
                        </h1>
                        <div className="flex flex-col items-start gap-3 text-xs text-white/80 md:flex-row md:text-sm">
                           <div className="flex items-center gap-3">
                              <div className="h-[2px] w-16 bg-white/80 md:hidden"></div>
                              <span>{blog.date}</span>
                              <div className="h-[2px] w-16 bg-white/80"></div>
                           </div>
                           <div className="flex flex-col gap-4">
                              <p className="truncate-lines max-w-[420px]">
                                 {blog.desc}
                              </p>
                              <button className="relative w-fit pb-3 font-semibold after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[52%] after:bg-white after:transition-all after:content-[''] hover:after:w-full">
                                 Baca Selengkapnya
                              </button>
                           </div>
                        </div>
                        <div className="mx-auto flex gap-3 pt-14 md:mx-0 md:pt-16">
                           {blogs.map((item, i) => (
                              <span
                                 key={item.title}
                                 className={[
                                    "h-2 w-2 cursor-pointer rounded-full md:h-3 md:w-3",
                                    i === realSlide
                                       ? "bg-white"
                                       : "bg-white/30",
                                 ].join(" ")}
                                 onClick={() => i !== realSlide && swiper.current.slideTo(i + 1)}
                              />
                           ))}
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </section>
   );
};

export default Hero;
