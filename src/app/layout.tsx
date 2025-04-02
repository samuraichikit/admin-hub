import type { Metadata } from 'next'

import { ReactNode } from 'react'

import { ApolloProviderLayout } from '@/common/providers'

import '@samuraichikit/inc-ui-kit/dist/index.css'

export const metadata: Metadata = {
  title: 'admin-hub',
  description: 'An admin dashboard for managing data and users.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang={'en'}>
      <body>
        <ApolloProviderLayout>{children}</ApolloProviderLayout>
      </body>
    </html>
  )
}
