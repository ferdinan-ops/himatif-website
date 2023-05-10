interface CategoryButtonProps {
  onClick: () => void
  children: React.ReactNode
  active: boolean
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ onClick, children, active }) => {
  return (
    <button
      className={`min-w-max cursor-pointer rounded-full py-2 text-xs md:text-sm xl:text-base ${
        active ? 'bg-primary px-6 text-white hover:bg-primary-dark' : 'px-4 hover:text-primary'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default CategoryButton
