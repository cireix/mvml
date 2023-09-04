import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'

import './global.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { GlobalStyles, theme } from '@/styles';

const inter = Lato({
  weight: ['400', '700', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Jarvis - Customer Support',
  description: 'Jarvis, the customer support bot.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyles theme={theme} />
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
