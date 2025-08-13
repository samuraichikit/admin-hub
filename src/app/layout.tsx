import type { Metadata } from 'next'

import { ReactNode } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'

import { ApolloProviderLayout, AuthProvider } from '@/common/providers'
import { Header } from '@/components/ui'
import { Sidebar } from '@/components/ui/sideBar'
import { ScrollArea } from '@samuraichikit/inc-ui-kit'

import '@/styles/index.scss'
import '@samuraichikit/inc-ui-kit/dist/index.css'
import 'react-loading-skeleton/dist/skeleton.css'
import '../styles/swiper-overrides.scss'

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
    scrollArea: s.scrollArea,
  }

  return (
    <html lang={'en'}>
      <body>
        <SkeletonTheme baseColor={'#0d0d0d'} highlightColor={'#333'}>
          <ApolloProviderLayout>
            <AuthProvider>
              <Header />
              <ScrollArea className={classNames.scrollArea}>
                <div className={s.layoutContainer}>
                  <Sidebar />
                  <main className={s.main}>{children}</main>
                </div>
              </ScrollArea>
            </AuthProvider>
          </ApolloProviderLayout>
        </SkeletonTheme>
      </body>
    </html>
  )
}
