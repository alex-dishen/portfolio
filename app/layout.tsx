import { ReactNode } from 'react'
import { Metadata } from 'next'
import StyledComponentsRegistry from '../lib/registry'
import '../src/styles/normalize.css'
import '../src/styles/font.css'
import Navbar from 'src/components/Navbar'

export const metadata: Metadata = {
  title: 'Oleksandr Didyshen',
  description: '...',
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
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
