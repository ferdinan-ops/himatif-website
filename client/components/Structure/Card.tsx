import { IMember } from '@/types/member.type'
import Image from 'next/image'
import React from 'react'

interface CardProps {
  member: IMember
}

const Card: React.FC<CardProps> = ({ member }) => {
  const { attributes } = member
  const defaultPhoto = 'https://res.cloudinary.com/dwaccl8ae/image/upload/v1685192098/himatif-postgre/male_9f97704354.png'
  return (
    <article>
      <div className="relative h-[242px] w-[216px] overflow-hidden rounded-2xl font-sans tracking-wide focus:cursor-grab xl:h-[340px] xl:w-[350px]">
        <Image
          src={
            attributes.photo?.data?.attributes.url
              ? attributes.photo?.data?.attributes.url
              : defaultPhoto
          }
          alt={attributes.nama}
          className="object-cover"
          fill
        />
        <div className="profile-gradient absolute inset-0 flex flex-col px-3 py-4 xl:p-6">
          <div className="mt-auto flex flex-col gap-1 text-white">
            <span className="text-[15px] font-bold md:text-lg">{attributes.nama}</span>
            <span className="text-xs font-semibold text-sky-300 md:text-sm">{attributes.jabatan}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Card
