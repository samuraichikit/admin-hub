import type { Metadata } from 'next'

import { ReactNode } from 'react'

import { ApolloProviderLayout, AuthProvider } from '@/common/providers'
import { Header } from '@/components/ui'

import '@samuraichikit/inc-ui-kit/dist/index.css'

import s from './layout.module.scss'

export const metadata: Metadata = {
  title: 'admin-hub',
  description: 'An admin dashboard for managing data and users.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const classNames = {
    main: s.main,
  }

  return (
    <html lang={'en'}>
      <body>
        <ApolloProviderLayout>
          <AuthProvider>
            <Header />
            <main className={classNames.main}>{children}</main>
          </AuthProvider>
        </ApolloProviderLayout>
      </body>
    </html>
  )
}
