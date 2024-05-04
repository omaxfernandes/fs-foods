import { Category } from '@prisma/client'
import Image from 'next/image'

interface categoryItemProps {
  category: Category
}

const CategoryItem = ({ category }: categoryItemProps) => {
  return (
    <div className="flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-md">
      <Image src={category.imageUrl} alt={category.name} height={30} width={30} />
      <span className="text-sm font-semibold">{category.name}</span>{' '}
      {/* Coloque esta linha dentro da mesma <div> */}
    </div>
  )
}

export default CategoryItem