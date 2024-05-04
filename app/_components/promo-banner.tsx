import Image, { ImageProps } from 'next/image'

interface PromoBannerProps {}

const PromoBanner = (props: ImageProps) => {
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
