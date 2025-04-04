'use client'

import { ReactNode, useEffect, useState } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import { getCurrentLocale } from '../utils'

export function AuthProvider({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const { push } = useRouter()
  const [isAuth, setIsAuth] = useState<boolean | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const authState = localStorage.getItem('isLogged') === 'true'
    const locale = getCurrentLocale(pathname)

    setIsAuth(authState)

    const routes = {
      signedIn: `/${locale}/usersList`,
      signIn: `/${locale}/signIn`,
    }

    if (pathname === routes.signIn && authState) {
      push(routes.signedIn)
    } else if (authState && pathname === '/') {
      push(routes.signedIn)
    } else if (!authState) {
      push(routes.signIn)
    }
  }, [push, pathname])

  if (isAuth === null || pathname === '/') {
    return <div>Loading...</div>
  }

  return <>{children}</>
}
