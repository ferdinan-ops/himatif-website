import React from 'react'
import Card from './Card'
import useMembers from '@/hooks/useMembers'
import { IMember } from '@/types/member.type'

interface DivisiProps {
  year: string,
  title: string,
}

const Divisi: React.FC<DivisiProps> = ({ title, year }) => {
  const { data: members } = useMembers(year, title)

  console.log(members);


  return (
    <div className='flex flex-col md:gap-10 gap-8 font-title'>
      <h1 className='text-lg md:text-2xl font-bold'>{title}</h1>
      <div className='flex gap-6 xl:gap-8 overflow-y-auto no-scrollbar'>
        {members && (
          members.data.map((member: IMember) => (
            <Card key={member.id} member={member} />
          )))
        }
      </div>
    </div>
  )
}

export default Divisi