import Lottie from 'react-lottie'
import animationData from '../../assets/lotties/not-found.json'

interface NoPostProps {
  keyword?: string
  category?: string
}

const NoPost: React.FC<NoPostProps> = ({ keyword, category }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <article className="max-w-[600px] flex flex-col pb-5 mx-auto">
      <div className='flex m-auto flex-col items-center'>
        <div className="w-[150px] h-[150px] md:w-[250px] md:h-[250px]">
          <Lottie
            options={defaultOptions}
            style={{ height: '100%', width: '100%' }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-[15px] md:text-lg font-bold text-font-black text-center">
            Tidak ada blog yang ditemukan
          </h2>
          <p className="text-xs text-center md:text-sm text-font-gray">
            Kami tidak dapat menemukan blog dengan{" "}
            {keyword && <>keyword <span className="font-bold">'{keyword}'</span></>}
            {keyword && category && ' dan '}
            {category && <>kategori <span className="font-bold">'{category}'</span></>}
          </p>
        </div>

      </div>
    </article>
  )
}

export default NoPost