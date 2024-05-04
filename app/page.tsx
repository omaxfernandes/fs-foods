import Image from 'next/image'
import Header from './_components/header'
import Search from './_components/search'

export default function Home() {
  return (
    <>
      <Header />
      <div className="px5 pt-6">
        <Search />
      </div>
    </>
  )
}
