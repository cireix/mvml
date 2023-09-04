import { StyledComponentsRegistry, ThemeWrapper } from '@/lib';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import './global.css';

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
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeWrapper>
            <Header />
            {children}
            <Footer />
          </ThemeWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
