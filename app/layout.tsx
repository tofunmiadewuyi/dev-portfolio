import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Topbar from './ui/topbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tofunmi - Dev Folio',
  description: 'Code portfolio by Tofunmi Adewuyi.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        <Topbar/>
        {children}
        </body>
    </html>
  )
}
