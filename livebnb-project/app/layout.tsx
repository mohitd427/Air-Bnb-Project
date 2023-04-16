import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/CientOnly'
import Modal from './components/modals/Modal'

export const metadata = {
  title: 'Live Bnb',
  description: 'Air Bnb Clone',
}

const font = Nunito({
  subsets: ['latin']
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        <Modal actionLabel='Submit' isOpen/>
          <Navbar />
        </ClientOnly>
        {children}
      </body>

    </html>
  )
}
