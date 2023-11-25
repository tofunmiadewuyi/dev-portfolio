import { CSSIcon, JavascriptIcon, NextJsIcon, ReactIcon, StackIcon, TailwindIcon, TypescriptIcon } from "../icons";


export default function Stack() {
    return (
        <div className='bg-myblack h-fit p-1.5 md:max-w-fit rounded-[20px]' style={{boxShadow: '4px 3px 4px 0px rgba(255, 255, 255, 0.05) inset'}}>
          <span className="flex gap-1 w-full justify-center py-2 text-white/70 text-sm leading-5 font-medium">
            <StackIcon/>
            Stack</span>
          <div className="flex justify-center gap-2 p-3 rounded-2xl border border-white/5 bg-white/5 ">
            <JavascriptIcon/>
            <TypescriptIcon/>
            <NextJsIcon/>
            <ReactIcon/>
            {/* <CSSIcon/> */}
            <TailwindIcon/>
          </div>
        </div>
    )
}