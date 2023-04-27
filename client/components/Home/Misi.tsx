import { IMisi } from '../../types/himatif.type'
import Container from '../AllPages/Container'
import { MisiImg } from '../../assets'
import Image from 'next/image'

interface MisiProps {
  missions: IMisi[]
}

const Misi: React.FC<MisiProps> = ({ missions }) => {
  return (
    <section className="bg-white text-font-black">
      <Container className="md:py-14 xl:py-28">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16 xl:gap-[100px]">
          <Image src={MisiImg} alt="" className="w-full flex-1 overflow-hidden rounded-lg object-cover md:w-[600px]" />
          <div className="flex flex-1 flex-col gap-6 md:gap-8 xl:gap-[52px]">
            <h1 className="relative z-10 w-fit text-4xl font-bold after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-3 after:w-full after:bg-primary/20 after:content-[''] md:text-4xl xl:text-6xl xl:leading-[72px] xl:after:bottom-1 xl:after:h-5">
              Misi HIMATIF
            </h1>
            <ul className="ml-5 list-disc text-sm leading-6 marker:text-primary xl:text-xl xl:leading-9">
              {missions.map((mission) => (
                <li className="text-font-gray" key={mission.id}>
                  {mission.deskripsi_misi}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Misi
