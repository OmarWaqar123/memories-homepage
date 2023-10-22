import type { Metadata } from 'next'
import { Inter,Assistant } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/Navbar'

const inter = Inter({ subsets: ['latin'] })
const assistant = Assistant({subsets: ['latin'], weight:['700','400','600','700']})

export const metadata: Metadata = {
  title: 'Memories.net | Where memories Keep Living',
  description: 'the best place to store the memories of your loved ones',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${assistant.className} relative`}>
      <Navbar/>
      
        {children}
        </body>
    </html>
  )
}
