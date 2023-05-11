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
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <article className="mx-auto flex max-w-[600px] flex-col pb-5">
      <div className="m-auto flex flex-col items-center">
        <div className="h-[150px] w-[150px] md:h-[250px] md:w-[250px]">
          <Lottie options={defaultOptions} style={{ height: '100%', width: '100%' }} />
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-center text-[15px] font-bold text-font-black md:text-lg">
            Tidak ada blog yang ditemukan
          </h2>
          <p className="text-center text-xs text-font-gray md:text-sm">
            Kami tidak dapat menemukan blog dengan{' '}
            {keyword && (
              <>
                keyword <span className="font-bold">'{keyword}'</span>
              </>
            )}
            {keyword && category && ' dan '}
            {category && (
              <>
                kategori <span className="font-bold">'{category}'</span>
              </>
            )}
          </p>
        </div>
      </div>
    </article>
  )
}

export default NoPost
