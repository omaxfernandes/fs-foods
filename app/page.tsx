import Image from 'next/image'
import Header from './_components/header'
import Search from './_components/search'
import CategoryList from './_components/category-list'
import ProductList from './_components/product-list'
import { Button } from './_components/ui/button'
import { ChevronRightSquareIcon } from 'lucide-react'

import { db } from './_lib/prisma'
import PromoBanner from './_components/promo-banner'
import RestaurantList from './_components/restaurant-list'
import RestaurantItem from './_components/restaurant-item'

const Home = async () => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  })

  return (
    <>
      <Header />
      <div className="px5 pt-6">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <CategoryList />
      </div>
      <div className="px-5 pt-6">
        <PromoBanner src="/promo-banner-01.png" alt="Até 30% de desconto em pizas!" />
      </div>

      <div className="space-y-4 pt-6">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Pedidos Recomendados</h2>
          <Button variant="ghost" className="h-fit px-0 text-primary hover:bg-transparent">
            Ver todos
            <ChevronRightSquareIcon size={16} />
          </Button>
        </div>
        <div className="px-5 pt-6">
          <ProductList products={products} />
        </div>
      </div>
      <div className="px-5 pt-6">
        <PromoBanner src="/promo-banner-02.png" alt="A partir de R$17,90 em lanches!" />
      </div>

      <div className="space-y-4 py-6">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Restaurantes Recomendados</h2>
          <Button variant="ghost" className="h-fit px-0 text-primary hover:bg-transparent">
            Ver todos
            <ChevronRightSquareIcon size={16} />
          </Button>
        </div>
        <div className="px-5 pt-6">
          <RestaurantList />
        </div>
      </div>
    </>
  )
}

export default Home
