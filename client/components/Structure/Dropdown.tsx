import { HiCalendar, HiChevronDown } from 'react-icons/hi2'
import { useState } from 'react'
import Link from 'next/link'

interface DropdownProps {
  years: [string]
}

const Dropdown: React.FC<DropdownProps> = ({ years }) => {
  const [isShow, setIsShow] = useState<boolean>(false)
  const handleShow = (): void => setIsShow(!isShow)

  return (
    <div className="relative w-fit cursor-pointer rounded-lg border border-slate-300 text-sm font-semibold outline-none xl:text-base">
      <div className="flex items-center gap-3 px-3 py-1.5 hover:bg-slate-100 xl:px-4 xl:py-2" onClick={handleShow}>
        <HiCalendar className="text-base" />
        <span className="tracking-wide">2022</span>
        <HiChevronDown className="text-base text-font-gray" />
      </div>
      <div
        className={`absolute left-0 top-full z-10 mt-1 w-full overflow-hidden rounded-lg border border-slate-300 bg-white ${
          isShow ? 'flex' : 'hidden'
        } flex-col`}
      >
        {years.map((year, idx) => (
          <Link href={`/structure/${year}`} className="cursor-pointer px-3 py-1.5 hover:bg-slate-100" key={idx}>
            {year}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Dropdown
