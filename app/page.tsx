import Image from 'next/image'
import Header from './_components/header'
import Search from './_components/search'
import CategoryList from './_components/category-list'
import ProductList from './_components/product-list'
import { Button } from './_components/ui/button'
import { ChevronRightSquareIcon } from 'lucide-react'

export default function Home() {
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
        <Image
          className="h-auto w-full object-contain"
          src="/promo-banner-01.png"
          alt="Até 30% de desconto em pizas!"
          width={0}
          height={0}
          sizes="100vw"
          quality={100}
        />
      </div>

      <div className="space-y-4 pt-6">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Pedidos Recomendados</h2>
          <Button variant="ghost" className="h-fit px-0 text-primary hover:bg-transparent">
            Ver todos
            <ChevronRightSquareIcon size={16} />
          </Button>
        </div>
        <ProductList />
      </div>
    </>
  )
}
