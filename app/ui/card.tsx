import Image from "next/image"
import { CardType } from "../types"
import Link from "next/link";

export default function Card({info}: {info: CardType}) {
    const {title, desc, icon, image, type, shadow, url} = info
    const movingBlur = type === 'mobile' ? 'image-bg-blur' : 'image-bg-blur1';
    return (
        <article className="card-container w-full shadow-card rounded-[20px] border border-myblack/5 overflow-hidden hover:scale-102 hover:cursor-pointer transition duration-300 ease-in-out group">
            <Link href={url} target="_blank">
            <div className="image relative w-full h-[240px] xl:h-[310px] bg-card overflow-hidden" style={{boxShadow: '4px 4px 4px 0px rgba(255, 255, 255, 0.25) inset'}}> 
                <span className="absolute z-[1] w-full overflow-hidden rounded-e[10px] top-0 left-0 opacity-20"><ImageBlurBg fill={shadow}radius='100' blur={movingBlur}/></span>
                <span className="absolute justify-center w-full p-10 top-0 left-0 flex z-10"
                style={{boxShadow: '4px 4px 4px 0px rgba(255, 255, 255, 0.25) inset'}}>
                <Image 
                className={`${type === 'desktop' ? 'w-[590px]' : 'w-[300px]'} group-hover:scale-105 transition duration-100 ease-out`}
                src={image} 
                alt={`${title}-image`}
                placeholder="blur"/>
                </span>
            </div>
            <div className="px-6 py-5 box-border flex flex-col gap-1 bg-white">
                <span className="flex gap-3">
                    {icon}
                    <header className="font-medium text-myblack leading-6">{title}</header>
                </span>
                <p className="px-9 leading-5 text-sm text-myblack/75 line-clamp-1">{desc}</p>
            </div>
            </Link>
        </article>
    )
}

//#161616
//#FCEED2
//#302103

// using routes and pages <Link href={`/project/${title}`}>...</Link>


function ImageBlurBg({fill, radius, blur}:{fill:string, radius:string, blur:string}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="590" height="310" viewBox="0 0 590 310" fill="none">
            <g filter="url(#filter0_f_151_1924)">
                <circle className={`${blur}`}  cx="295" cy="155" r={radius} fill={fill}/>
            </g>
            <defs>
                <filter id="filter0_f_151_1924" x="0" y="-145" width="600" height="600" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_151_1924"/>
                </filter>
            </defs>
        </svg>
    )
}