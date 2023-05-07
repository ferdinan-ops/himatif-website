import { IMember } from '@/types/member.type'
import Image from 'next/image'
import React from 'react'

interface CardProps {
  member: IMember
}

const Card: React.FC<CardProps> = ({ member }) => {
  const { attributes } = member
  return (
    <article>
      <div className='relative w-[216px] h-[242px] xl:w-[350px] xl:h-[340px] rounded-2xl overflow-hidden font-sans tracking-wide focus:cursor-grab'>
        <Image
          src={attributes.photo?.data?.attributes.url ? attributes.photo?.data?.attributes.url : 'https://source.unsplash.com/random?profile'}
          alt={attributes.nama}
          className='object-cover'
          fill
        />
        <div className='absolute inset-0 profile-gradient flex flex-col p-6'>
          <div className='flex flex-col mt-auto text-white gap-1'>
            <span className='text-base md:text-lg font-bold'>{attributes.nama}</span>
            <span className='text-xs md:text-sm font-semibold'>{attributes.jabatan}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Card