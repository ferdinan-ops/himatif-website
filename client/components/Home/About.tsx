import { sosialMedia } from '../../lib/data'
import Container from '../AllPages/Container'
import Link from 'next/link'

interface AboutProps {
  desc: string
}

const About: React.FC<AboutProps> = ({ desc }) => {
  return (
    <section className="bg-white pt-14 md:pt-28">
      <Container className="text-font-black">
        <h1 className="relative z-10 mx-auto w-fit text-sm font-bold after:absolute after:bottom-[2px] after:left-0 after:-z-10 after:h-2 after:w-full after:bg-primary/20 after:content-[''] md:text-lg md:after:bottom-1">
          Tentang HIMATIF
        </h1>
        <p className="mx-auto mt-[32px] text-justify leading-8 text-font-gray md:max-w-[90%] md:text-center md:text-xl md:leading-10">
          &quot; {desc} &quot;
        </p>
        <span className="mx-auto my-5 block h-2 w-2 rounded-full bg-slate-200 md:h-3 md:w-3" />
        <div className="flex items-center justify-center gap-8 text-font-black">
          {sosialMedia.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="rounded-full p-2 transition-all hover:bg-primary hover:text-white"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </Container>

      <div className="relative mt-20 h-64 overflow-x-hidden">
        <div className="radial-gradient absolute inset-x-0 top-0 h-20 w-[105%] origin-top-left rotate-6 overflow-hidden text-[#060919] md:rotate-[4deg] xl:h-28 xl:rotate-3">
          <span className="absolute top-1/2 w-max -translate-y-1/2 text-3xl font-bold xl:text-5xl">
            HIMPUNAN MAHASISWA TEKNIK INFORMATIKA <span className="text-red-500">♥️</span> HIMPUNAN MAHASISWA TEKNIK
            INFORMATIKA
          </span>
        </div>
        <div className="radial-gradient absolute -left-3 top-0 z-10 h-20 w-[105%] origin-top-right -rotate-6 overflow-hidden text-[#060919] shadow-2xl md:-rotate-[4deg] xl:h-28 xl:-rotate-3">
          <span className="absolute top-1/2 w-max -translate-y-1/2 text-3xl font-bold xl:text-5xl">
            HIMPUNAN MAHASISWA TEKNIK INFORMATIKA <span className="text-red-500">♥️</span> HIMPUNAN MAHASISWA TEKNIK
            INFORMATIKA
          </span>
        </div>
      </div>
    </section>
  )
}

export default About
