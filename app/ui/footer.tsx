import { LinkedInIcon, DribbleIcon, BehanceIcon } from "../icons"
import Link from "next/link"

export default function Footer() {
    return(
        <div className=" border-t border-myblack/10">
            <div className=" flex gap-20 h-[200px]">
                <Link href='www.tofunmiadewuyi.com'
                className=" overflow-hidden rounded-[20px] backdrop-blur-sm hover:shadow-card hover:h-[320px] hover:-translate-y-[130px] hover:bg-white/30 transition duration-150 ease-in-out">
                    <span className="opacity-60 hover:opacity-100">
                    <LinkedInIcon/>
                   </span>
                </Link>
                <Link href='www.tofunmiadewuyi.com'
                className=" overflow-hidden rounded-[20px] backdrop-blur-sm hover:shadow-card hover:h-[320px] hover:-translate-y-[130px] hover:bg-white/30 transition duration-150 ease-in-out">
                    <span className="opacity-60 hover:opacity-100">
                    <DribbleIcon/>
                   </span>
                </Link>
                <Link href='www.tofunmiadewuyi.com'
                className="overflow-hidden rounded-[20px] backdrop-blur-sm hover:shadow-card hover:h-[320px] hover:-translate-y-[130px] hover:bg-white/30 transition duration-150 ease-in-out">
                   <span className="opacity-60 hover:opacity-100">
                   <BehanceIcon/>
                   </span>
                </Link>
            </div>  
        </div>
    )
}

//161616