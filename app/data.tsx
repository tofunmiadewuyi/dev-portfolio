import { Project } from "./types"
import artinst from '@/public/images/artinst-full.png'
import fuud from '@/public/images/fuud.png'
import expense from '@/public/images/expense.png'
import todo from '@/public/images/todo.png'
import { DesignIcon, GitHubIcon, BrushIcon, ExpenseIcon, TodoIcon, FoodIcon } from './icons'
import { CardType } from './types'

export const data:Project[] = [
    {
    title: 'Artinst',
    desc: 'Discover popular artworks, by famous artists or by mediums.',
    liveurl: 'https://artinst.tofunmiadewuyi.com/',
    image: artinst
    },
    {
    title: 'Expense Management',
    desc: 'A very simple app that adds up all your expenses.',
    liveurl: 'https://expensemanagement.tofunmiadewuyi.repl.co/',
    image: expense
    },
    {
    title: 'To-do',
    desc: 'Single page, no frills, focus on your tasks and get them done.',
    liveurl: 'https://https://to-do.tofunmiadewuyi.repl.co/',
    image: todo
    },
    {
    title: 'Fuud',
    desc: 'Find fun recipes for meals from around the world.',
    liveurl: 'https://fuud-phi.vercel.app/',
    image: fuud
    },
]


export const cards: CardType[] = [
    {
      title: data[0].title,
      desc: data[0].desc,
      icon: <ExpenseIcon/>,
      image: data[0].image,
      type: 'desktop',
      shadow: '#A2C880'
    },
    {
      title: data[1].title,
      desc: data[1].desc,
      icon: <ExpenseIcon/>,
      image: data[1].image,
      type: 'mobile',
      shadow: '#A2C880'
    },
    {
      title: data[2].title,
      desc: data[2].desc,
      icon: <TodoIcon/>,
      image: data[2].image,
      type: 'mobile',
      shadow: '#A2C880'
    },
    {
      title: data[3].title,
      desc: data[3].desc,
      icon: <FoodIcon/>,
      image: data[3].image,
      type: 'desktop',
      shadow: '#38CFBB'
    }
  ] 