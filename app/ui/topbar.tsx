import { LogoIcon, SearchIcon } from "../icons"


export default function Topbar() {
    return (
        <div className="text-myblack z-50 bg-white w-screen fixed border-b border-myblack/7 shadow-topbar h-16 justify-between p-3 flex items-center">
            <span className="flex gap-1.5 items-center">
                <LogoIcon/>
                <h1 className="text-myblack font-semibold text-lg tracking-[-2%]">Tofunmi Adewuyi</h1>
            </span>
            <span className="relative hidden sm:block">
                <input 
                    type="text"
                    placeholder="Search"
                    className="h-10 max-w-[264px] placeholder:text-sm placeholder:text-myblack/70 border border-myblack/5 rounded-xl px-[34px] bg-[#F9FAFC]"
                    style={{boxShadow: '0px -1px 4px 0px rgba(22, 22, 22, 0.07) inset'}}/>
                <span className="absolute flex top-0 h-full px-2.5 my-auto left-0">
                    <SearchIcon/>
                </span>
                <span className="absolute right-0 p-1 rounded-lg text-myblack/80 text-xs my-2 mr-2 bg-myblack/7">⌘K</span>
            </span>
        </div>
    )
}