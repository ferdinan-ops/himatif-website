import { IMember } from '@/types/member.type'
import Link from 'next/link'
import * as React from 'react'
import { HiCalendar, HiChevronDown } from 'react-icons/hi2'

interface DropdownProps {
  years: IMember[]
}

const Dropdown: React.FC<DropdownProps> = ({ years }) => {
  const [isShow, setIsShow] = React.useState<boolean>(false)
  const handleShow = (): void => setIsShow(!isShow)

  return (
    <div className="border border-slate-300 relative w-fit cursor-pointer rounded-lg text-sm font-semibold outline-none xl:text-base">
      <div className="flex items-center gap-3 hover:bg-slate-100 px-3 py-1.5 xl:px-4 xl:py-2" onClick={handleShow}>
        <HiCalendar className='text-base' />
        <span className='tracking-wide'>2022</span>
        <HiChevronDown className='text-base text-font-gray' />
      </div>
      <div className={`absolute top-full mt-1 w-full left-0 bg-white rounded-lg border border-slate-300 z-10 overflow-hidden ${isShow ? 'flex' : 'hidden'} flex-col`}>
        {years.map((year) => (
          <Link href={`/structure/${year.attributes.tahun_bergabung}`} className="cursor-pointer px-3 py-1.5 hover:bg-slate-100" key={year.id}>
            {year.attributes.tahun_bergabung}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Dropdown
