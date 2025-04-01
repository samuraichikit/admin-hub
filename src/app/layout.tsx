'use client'

import type { Metadata } from 'next'

import { ReactNode } from 'react'

import { client } from '@/services'
import { ApolloProvider } from '@apollo/client'

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
    <ApolloProvider client={client}>
      <html lang={'en'}>
        <body>{children}</body>
      </html>
    </ApolloProvider>
  )
}
