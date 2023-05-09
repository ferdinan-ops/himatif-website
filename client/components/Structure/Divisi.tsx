import useMembers from '@/hooks/useMembers'
import { IMember } from '@/types/member.type'
import Card from './Card'

interface DivisiProps {
  latestYear: string
  title: string
  slug: string
}

const Divisi: React.FC<DivisiProps> = ({ title, latestYear, slug }) => {
  const { data: members } = useMembers(latestYear, slug)

  return (
    <div className="flex flex-col gap-8 font-title md:gap-10">
      <h1 className="text-lg font-bold md:text-2xl">{title}</h1>
      <div className="no-scrollbar flex gap-6 overflow-y-auto xl:gap-8">
        {members && members.data.map((member: IMember) => <Card key={member.id} member={member} />)}
      </div>
    </div>
  )
}

export default Divisi
