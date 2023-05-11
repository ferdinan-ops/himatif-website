import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { RiWhatsappFill } from 'react-icons/ri'

interface ShareProps {
  url: string
}

const Share: React.FC<ShareProps> = ({ url }) => {
  return (
    <div className="mt-4 flex items-center gap-4 rounded-full px-2 py-1 shadow-lg md:mt-6 md:gap-5 md:px-4 md:py-2">
      <div className="cursor-pointer rounded-full bg-white p-1.5 text-sm hover:bg-slate-300 md:p-2 md:text-base">
        <FacebookShareButton url={url} className="flex">
          <FaFacebookF className="text-base md:text-lg" />
        </FacebookShareButton>
      </div>

      <div className="cursor-pointer rounded-full bg-white p-1.5 text-sm hover:bg-slate-300 md:p-2 md:text-base">
        <TwitterShareButton url={url} className="flex">
          <FaTwitter className="text-base md:text-lg" />
        </TwitterShareButton>
      </div>

      <div className="cursor-pointer rounded-full bg-white p-1.5 text-sm hover:bg-slate-300 md:p-2 md:text-base">
        <WhatsappShareButton url={url} className="flex">
          <RiWhatsappFill className="text-base md:text-xl" />
        </WhatsappShareButton>
      </div>
    </div>
  )
}

export default Share
