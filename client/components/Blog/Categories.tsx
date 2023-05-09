import Link from 'next/link'
import { useRouter } from 'next/router'

import Container from '../AllPages/Container'
import { ICategory } from '@/types/category.type'
import useCategories from '@/hooks/useCategories'

interface CategoriesProps {
  slug?: string
}

const Categories: React.FC<CategoriesProps> = ({ slug }) => {
  const router = useRouter()
  const { data } = useCategories()
  const btnStyle = 'min-w-max cursor-pointer rounded-full py-2 text-xs md:text-sm xl:text-base'

  const handleCategory = (categorySlug: string) => {
    router.push({
      pathname: '/blogs',
      query: { ...router.query, category: categorySlug }
    })
  }

  return (
    <Container className="mt-16 md:mt-20 xl:mt-24">
      <ul className="no-scrollbar mx-auto flex items-center gap-3 overflow-y-auto font-semibold text-font-black md:gap-5 xl:gap-6">
        <Link href='/blogs' className={`${btnStyle} ${!slug ? 'bg-primary text-white px-6 hover:bg-primary-dark' : 'px-4 hover:text-primary'}`}>
          Semua
        </Link>
        {data && data.data.map((category: ICategory) => (
          <div
            key={category.id}
            onClick={() => handleCategory(category.attributes.slug)}
            className={`${btnStyle} ${slug === category.attributes.slug ? 'bg-primary text-white px-6 hover:bg-primary-dark' : 'px-4 hover:text-primary'}`}
          >
            {category.attributes.nama}
          </div>
        ))}
      </ul>
    </Container>
  )
}

export default Categories
