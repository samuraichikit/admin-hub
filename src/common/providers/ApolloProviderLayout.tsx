'use client'

import { ReactNode } from 'react'

import { client } from '@/services'
import { ApolloProvider } from '@apollo/client'

export function ApolloProviderLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
