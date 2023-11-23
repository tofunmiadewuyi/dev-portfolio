import Image from 'next/image'
import Logo from '@/public/icons/logo.svg'
import GitHubWhite from '@/public/icons/github-white.svg'
import GitHubBlack from '@/public/icons/github-black.svg'
import Design from '@/public/icons/design.svg'
import Brush from '@/public/icons/brush.svg'
import Expense from '@/public/icons/expense.svg'
import Todo from '@/public/icons/todo.svg'
import Food from '@/public/icons/food.svg'
import Search from '@/public/icons/search.svg'
import Stack from '@/public/icons/stack.svg'
import Javascript from '@/public/icons/javascript.svg'
import Typescript from '@/public/icons/typescript.svg'
import NextJs from '@/public/icons/nextjs.svg'
import Reacti from '@/public/icons/react.svg'
import CSS from '@/public/icons/css.svg'
import Tailwind from '@/public/icons/tailwind.svg'
import Linkedin from '@/public/icons/linkedin.svg'
import Dribbble from '@/public/icons/dribbble.svg'
import Behance from '@/public/icons/behance.svg'
import Open from '@/public/icons/open.svg'

export const LogoIcon = () => {
    return <Image
    src={Logo}
    alt="tofunmi's logo"
    width={40}
    height={40}
    priority
  />
}

export const GitHubIcon = ({color}: {color: string}) => {
    if (color === 'white') {
        return <Image
        src={GitHubWhite}
        alt="github white logo"
        width={20}
        height={20}
        priority
      />
    }
    else if (color === 'black') {
        return <Image
        src={GitHubBlack}
        alt="github black logo"
        width={20}
        height={20}
        priority
      />
    }
}

export const DesignIcon = () => {
    return <Image
    src={Design}
    alt="feather icon"
    width={20}
    height={20}
    priority
  /> 
}

export const BrushIcon = () => {
    return <Image
        src={Brush}
        alt="paint brush icon"
        width={24}
        height={24}
        priority
      />
}

export const ExpenseIcon = () => {
    return  <Image
    src={Expense}
    alt="expense icon"
    width={24}
    height={24}
    priority
  />
}

export const TodoIcon = () => {
    return  <Image
    src={Todo}
    alt="todo icon"
    width={24}
    height={24}
    priority
  />
}

export const FoodIcon = () => {
    return  <Image
    src={Food}
    alt="food icon"
    width={24}
    height={24}
    priority
  />
}

export const SearchIcon = () => {
    return <Image
    src={Search}
    alt="search icon"
    width={20}
    height={20}
    priority
  />
}

export const StackIcon = () => {
    return <Image
    src={Stack}
    alt="stack icon"
    width={20}
    height={20}
    priority
  />
}

export const JavascriptIcon = () => {
    return <Image
    src={Javascript}
    alt="javascript icon"
    width={24}
    height={24}
    priority
  />
}

export const TypescriptIcon = () => {
    return <Image
    src={Typescript}
    alt="typescript icon"
    width={24}
    height={24}
    priority
  />
}

export const NextJsIcon = () => {
    return <Image
    src={NextJs}
    alt="NextJS icon"
    width={80}
    height={24}
    priority
  />
}

export const ReactIcon = () => {
    return <Image
    src={Reacti}
    alt="search icon"
    width={24}
    height={24}
    priority
  />
}

export const CSSIcon = () => {
    return <Image
    src={CSS}
    alt="css icon"
    width={24}
    height={24}
    priority
  />
}

export const TailwindIcon = () => {
    return <Image
    src={Tailwind}
    alt="tailwind icon"
    width={24}
    height={24}
    priority
  />
}

export const LinkedInIcon = () => {
    return <Image
    src={Linkedin}
    alt="linkedin icon"
    width={400}
    height={400}
    priority
  />
}

export const DribbleIcon = () => {
    return <Image
    src={Dribbble}
    alt="dribbble icon"
    width={400}
    height={400}
    priority
  />
}

export const BehanceIcon = () => {
    return <Image
    src={Behance}
    alt="behance icon"
    width={400}
    height={400}
    priority
  />
}

export const OpenIcon = () => {
  return <Image
  src={Open}
  alt="behance icon"
  width={20}
  height={20}
  priority
/>
}