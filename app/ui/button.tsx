import Link from "next/link"
interface ButtonProps {children: React.ReactNode, href: string}

export const BlackButton:React.FC<ButtonProps> = ({children, href}) => {
    return <Link href={href}
    className=" h-10 rounded-[10px] flex gap-1 justify-center items-center px-3 bg-myblack
    text-white text-[15px] leading-5 border border-white/20 shadow-blackbutton font-medium
    hover:scale-102 hover:bg-black transition duration-75 ease-out">
    {children}
    </Link>
}

export const WhiteButton:React.FC<ButtonProps> = ({children, href}) => {

    return <Link href={href}
        className=" h-10 rounded-[10px] flex gap-1 justify-center items-center px-3 bg-white
        text-myblack text-[15px] leading-5 border border-myblack/7 shadow-whitebutton font-medium
        hover:scale-102 hover:bg-background hover:shadow-none transition duration-75 ease-out">
        {children}
        </Link>
}

