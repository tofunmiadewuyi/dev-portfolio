import { StaticImageData } from 'next/image'

export type CardType = {
    title: string
    desc: string
    icon: React.ReactNode
    image: StaticImageData
    type: string
    shadow: string
  }