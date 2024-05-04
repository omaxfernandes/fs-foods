import Image from 'next/image'
import Header from './_components/header'
import Search from './_components/search'
import CategoryList from './_components/category-list'

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
    </>
  )
}
