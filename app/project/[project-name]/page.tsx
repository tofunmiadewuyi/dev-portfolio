import { GitHubIcon, OpenIcon } from "@/app/icons";
import { BlackButton, WhiteButton } from "@/app/ui/button";
import Footer from "@/app/ui/footer";
import Image from "next/image";
import artinst from '@/public/images/artinst-full.png'
import Contact from '../../ui/contact'

export default function Page() {
    return(
        <main className="min-h-screen flex flex-col items-center px-5 sm:px-10 lg:px-[120px]">
            <div className='body flex flex-col w-full items-center pt-32 md:pt-40 gap-12'>
                <div className='hero w-full flex flex-col gap-6'>
                    <div>Home/Artinst</div>
                    <h1 className='heroh1 font-medium max-w-md text-lg leading-6 text-myblack tracking-[-3%]'>
                    Artinst
                    </h1>
                    <p className="text-myblack/75 leading-5">Discover popular artworks, by famous artists or by mediums.</p>
                    <div className='flex flex-col sm:flex-row gap-3 md:gap-5'>
                    <BlackButton href='https://github.com/tofunmiadewuyi'>
                        <OpenIcon/>
                        <p>Open app</p>
                    </BlackButton>
                    <WhiteButton href='https://www.tofunmiadewuyi.com'>
                        <GitHubIcon color='black'/>
                        <p>GitHub</p>
                    </WhiteButton>
                    </div>
                    </div>
                <Image src={artinst} alt='image'/>
            </div>
            <Contact/>
            <Footer/>
        </main>
    )
}

{/* <main className="min-h-screen flex flex-col items-center bg-blue-300 px-[120px]">
            <div className="body flex flex-col gap-12 pt-32 bg-red-400 w-screen">
                <div>Home/Artinst</div>
                <section className="flex flex-col gap-6">
                    <h1 className=" text-lg text-myblack leading-6">Artinst</h1>
                    <p className="text-myblack/75 leading-5">Discover popular artworks, by famous artists or by mediums.</p>
                    <div className="flex gap-5">
                        <BlackButton href=''>
                            <GitHubIcon color="white"/>
                            <p>Open app</p>
                        </BlackButton>
                        <WhiteButton href=''>
                            <GitHubIcon color="black"/>
                            <p>GitHub</p>
                        </WhiteButton>
                    </div>
                </section>
            </div>
        </main> */}