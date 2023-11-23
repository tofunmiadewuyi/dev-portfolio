import { StaticImageData } from 'next/image'

export type CardType = {
    title: string
    desc: string
    icon: React.ReactNode
    image: StaticImageData
    type: string
    shadow: string
  }

export type Project = {
    title: string
    desc: string
    liveurl: string
    image: StaticImageData
}