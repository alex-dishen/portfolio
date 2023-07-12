import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import StyledComponentsRegistry from '../lib/registry'
import '../src/styles/normalize.css'
import Navbar from 'src/components/Navbar'

const manrope = Manrope({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Oleksandr Didyshen',
  description:
    "I'm a Software Engineer with 22+ finished projects. You are welcome to see my creations",
  keywords:
    'Portfolio, Front-End Developer, Full-Stack Developer, React, Next.js, TypeScript, Node.js, Express, PostgreSQL',
  openGraph: {
    title: 'Oleksandr Didyshen',
    images: ['/home-page.png'],
  },
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <StyledComponentsRegistry>
          <Navbar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
