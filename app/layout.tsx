import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'BLeader',
  description: 'Beat Leader redesign',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
