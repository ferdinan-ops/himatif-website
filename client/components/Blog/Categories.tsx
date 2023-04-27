import { ICategory } from '../../types/category.type'
import Link from 'next/link'

interface CategoriesProps {
  categories: ICategory[]
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <ul className="no-scrollbar mx-auto flex items-center gap-3 overflow-y-auto font-semibold text-font-black md:gap-5 xl:gap-6">
      <li className="min-w-max cursor-pointer rounded-full bg-primary px-6 py-2 text-xs text-white md:text-sm xl:text-base">
        Semua
      </li>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/blogs/category/${category.attributes.slug}`}
          className="min-w-max cursor-pointer rounded-full px-4 py-2 text-xs hover:text-primary md:text-sm xl:text-base"
        >
          {category.attributes.nama}
        </Link>
      ))}
    </ul>
  )
}

export default Categories
