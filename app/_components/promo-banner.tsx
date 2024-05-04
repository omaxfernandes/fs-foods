import Image from 'next/image'

interface PromoBannerProps {}

const PromoBanner = (props: PromoBannerProps) => {
  return (
    <Image
      className="h-auto w-full object-contain"
      alt="Até 30% de desconto em pizas!"
      width={0}
      height={0}
      sizes="100vw"
      quality={100}
      {...props}
    />
  )
}

export default PromoBanner
