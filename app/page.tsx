import { BlackButton, WhiteButton } from './ui/button'
import { DesignIcon, GitHubIcon } from './icons'
import Stack from './ui/stack'
import Card from './ui/card'
import Footer from './ui/footer'
import Contact from './ui/contact'
import {cards} from './data'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-5 sm:px-10 lg:px-[120px]">
      <div className='body flex items-center flex-col pt-32 md:pt-40 gap-16 md:gap-24 bg-green-300='>
        <div className='hero w-full flex flex-col gap-8 md:flex-row justify-between'>
          <div className='flex flex-col gap-3'>
            <h1 className='heroh1 font-medium max-w-md text-lg leading-6 text-myblack tracking-[-3%]'>
              Hi, I’m Tofunmi, I am a Product Designer turned Engineer and this is my code portfolio.
              </h1>
            <div className='flex flex-col sm:flex-row gap-3 md:gap-5'>
              <BlackButton href='https://github.com/tofunmiadewuyi'>
                <GitHubIcon color='white'/>
                <p>Github Profile</p>
              </BlackButton>
              <WhiteButton href='https://www.tofunmiadewuyi.com'>
                <DesignIcon/>
                <p>Design Portfolio</p>
              </WhiteButton>
            </div>

          </div>
          <Stack/>
        </div>
        <div className='body w-full flex flex-wrap gap-5'>
          {cards.map((card,index) => {
            return <Card key={index} info={card} />
          })}
        </div>
      </div>
      <Contact/>
      <Footer/>
    </main>
  )
}
