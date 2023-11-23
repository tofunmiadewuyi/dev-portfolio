import Link from "next/link"

export default function Contact() {
    return(
        <div className='contact w-full flex justify-center text-[13px] font-medium text-myblack/70 gap-10 py-48'>
          <Link href='https://www.tofunmiadewuyi.com'><p className='hover:underline'>Made by 7ofunm1</p></Link>
          <Link href='mailto:7ofunm1@gmail.com'>
            <p className='hover:underline'>7ofunm1@gmail.com</p>
          </Link>
          <p>Lagos, Nigeria | 2023</p>
        </div>
    )
}