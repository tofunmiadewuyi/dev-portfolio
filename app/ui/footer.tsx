import { LinkedInIcon, DribbleIcon, BehanceIcon, GitHubIcon } from "../icons"
import Link from "next/link"

export default function Footer() {
    return(
        <div className=" border-t border-myblack/10">
            <div className=" flex gap-20 h-[200px]">
                <Link href='https://github.com/tofunmiadewuyi' target="_blank"
                className="overflow-hidden rounded-[20px] backdrop-blur-sm hover:shadow-card hover:h-[320px] hover:-translate-y-[130px] hover:bg-white/30 transition duration-150 ease-in-out">
                    <span className="opacity-50 grayscale hover:opacity-100 hover:grayscale-0">
                    <GitHubIcon color="black" size={360} />
                    </span>
                </Link>
                <Link href='https://www.linkedin.com/in/tofunmi-adewuyi-173a8012a/' target="_blank"
                className=" overflow-hidden rounded-[20px] backdrop-blur-sm hover:shadow-card hover:h-[320px] hover:-translate-y-[130px] hover:bg-white/30 transition duration-150 ease-in-out">
                    <span className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0">
                    <LinkedInIcon/>
                   </span>
                </Link>
                <Link href='https://dribbble.com/7ofunm1' target="_blank"
                className=" overflow-hidden rounded-[20px] backdrop-blur-sm hover:shadow-card hover:h-[320px] hover:-translate-y-[130px] hover:bg-white/30 transition duration-150 ease-in-out">
                    <span className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0">
                    <DribbleIcon/>
                   </span>
                </Link>
                
            </div>  
        </div>
    )
}

//161616