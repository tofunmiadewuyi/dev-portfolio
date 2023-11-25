import Link from "next/link"

export default function Contact() {
    return(
        <div className='contact w-full flex flex-col items-center md:flex-row justify-center text-[13px] font-medium text-myblack/70 gap-10 py-48'>
          <Link href='https://www.tofunmiadewuyi.com' target="_blank">
            <p className='hover:underline'>Made by 7ofunm1</p></Link>
          <Link href='mailto:7ofunm1@gmail.com' target="_blank">
            <p className='hover:underline'>7ofunm1@gmail.com</p>
          </Link>
          <p>Lagos, Nigeria | 2023</p>
        </div>
    )
}