import Image from 'next/image'

interface PromoBannerProps {}

const PromoBanner = (props: PromoBannerProps) => {
  return (
    <Image
      className="h-auto w-full object-contain"
      width={0}
      height={0}
      sizes="100vw"
      quality={100}
      {...props}
    />
  )
}

export default PromoBanner
